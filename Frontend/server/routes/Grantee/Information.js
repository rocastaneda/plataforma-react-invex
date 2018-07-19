const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const fs = require("fs")
const multer = require('multer')
const { isHTML } = require("../../utils/Validation")
const { doRequestRest } = require("../../utils/HTTPRequest")

const LOGGER = require("../../config/Logger").Logger
const CONFIG = require("../../config")

module.exports = (router) => {

	var LOGGER_INFORMATION = CONFIG.LOGGER_INFORMATION

	var SERVICE = CONFIG.SERVICE_INFORMATION

	var serviceHandler = (config, map) => {
		return ( (req, res) => {
			var data = req.body

			if (Object.keys(data).length === 0 || (data.idUser === undefined || data.token === "")) {

				LOGGER("ERROR", "[User:"+data.idUser+"] "+config.name+".ValidationError: Need idUser, token", LOGGER_INFORMATION)
				return res.status(500).send({codigoError : "500", descripcionError : "ValidationError Need: idUser, token "})

			} else {
				var userId = data.idUser
				var headers = { "Content-Type": "application/json", "Authorization": "Basic " + new Buffer(CONFIG.APP_ID+":"+CONFIG.PSW_ID).toString('base64'), "usuario": userId, "oauth.bearer": data.token, "idDestino": SERVICE.ID_DESTINO, "idConsumidor": SERVICE.ID_CONSUMIDOR}

				var body = map ? map(data) : data;

				LOGGER("INFO","[User:"+userId+"] "+config.name+".BODY: " + JSON.stringify(body), LOGGER_INFORMATION)
				doRequestRest(config.protocol, config.host, config.port, config.path, config.method, headers, body, (response) => {

					LOGGER("DEBUG","[User:"+userId+"] "+config.name+".RESPONSE: " + response , LOGGER_INFORMATION)

					if(isHTML(response)) {
						LOGGER("ERROR","[User:"+userId+"] ", LOGGER_INFORMATION)

						var dataResponse = {}

						dataResponse.code = 500
						dataResponse.codigo = 500
						dataResponse.mensaje = "Datos Incorrectos"
						dataResponse.data = response

						return res.status(500).send(dataResponse)
					} else {
						var responseJSON = JSON.parse(response)
						LOGGER("INFO", "[User:"+userId+"] "+config.name+": Exitoso", LOGGER_INFORMATION)
						return res.status(200).send(responseJSON)
					}
				}, (err) => {
					LOGGER("ERROR", err, LOGGER_INFORMATION)

					return res.status(500).send(JSON.parse(err))
				})
			}

		})
	}

	var getGeneralInformation = serviceHandler({
		name: 'getGeneralInformation',
		protocol: SERVICE.PROTOCOL, host: SERVICE.HOST,port: SERVICE.PORT,
		path: SERVICE.GENERAL_INFO_PATH,
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		delete tmp.idUser
		delete tmp.token
		delete tmp.bpm_token
		return tmp
	});

	var updateGeneralInformation = serviceHandler({
		name: 'updateGeneralInformation',
		protocol: SERVICE.PROTOCOL, host: SERVICE.HOST,port: SERVICE.PORT,
		path: SERVICE.GENERAL_INFO_PATH,
		method: CONFIG.METHOD_POST
	}, (data) => {
		var tmp = {
	  		antecedentes: data.antecedentes,
	  		mision: data.mision,
	  		vision: data.vision,
	  		caracteristicasPoblacion: data.caracteristicasPoblacion,
	  		requisitosOtorgarServicio: data.requisitosOtorgarServicio,
	  		problemaSocial: data.problemaSocial,
	  		capacidadInstalada: data.capacidadInstalada,
	  		teoriaDeCambio: data.teoriaDeCambio,
	  		incumplimientosGraves: data.incumplimientosGraves,
			informacionVisita: data.informacionVisita,
	  		idDonataria: data.idDonataria
		}
		return tmp
	});

	var getInformationObjective = serviceHandler({
		name: 'getInformationObjective',
		protocol: SERVICE.PROTOCOL, host: SERVICE.HOST,port: SERVICE.PORT,
		path: SERVICE.OBJECTIVES_PATH,
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		delete tmp.idUser
		delete tmp.token
		delete tmp.bpm_token
		return tmp
	});

	//Link routes and functions
	router.post("/getGeneralInformation", getGeneralInformation)
	router.post("/updateGeneralInformation", updateGeneralInformation)
	router.post("/getInformationObjective", getInformationObjective)
}
