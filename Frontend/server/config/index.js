const [PROTOCOL_SERVICE, HOST_SERVICE, PORT_SERVICE] = process.env.BACKEND_SERVICE.split("#")

module.exports = {

	LEVEL_LOG: process.env.LEVEL_LOG === undefined ? "TRACE" : process.env.LEVEL_LOG,


	CATEGORIES: new Array(
		"App",
		"Utils.HTTPRequest",
		"Routes.Information"),

	LOGGER_DEFAULT :  0,
	LOGGER_REQUEST :  1,
	LOGGER_AUTH :     2,

	METHOD_POST : 'POST',
	METHOD_GET : 'GET',
	METHOD_PUT : 'PUT',
	METHOD_DELETE : 'DELETE',

	SERVICE_REGISTRO: {
		PROTOCOL: PROTOCOL_SERVICE,
		HOST: HOST_SERVICE,
		PORT: PORT_SERVICE,
		ID_CONSUMIDOR: "33",
		ID_DESTINO:	"100",
		GET_ACCOUNT:      "/NMP/InversionSocial/ProcesosDonataria/Donataria/Cuenta/v1/donataria",
		GET_REGISTER:     "/NMP/InversionSocial/ProcesosDonataria/Registro/v1/",
		INFO_GENERAL:     "/NMP/InversionSocial/ProcesosDonataria/Registro/v1/informacionGeneral",
	},

};
