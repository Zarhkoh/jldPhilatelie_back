const dotenv = require('dotenv');

// ENVIRONMENT = local || dev || prod || recette
const envFile = process.env.ENVIRONMENT ?
  `.env.${process.env.ENVIRONMENT}` :
  '.env.local';
dotenv.config({
  path: envFile
});

const CONFIG = {}; // Make this global to use all over the application

CONFIG.app = process.env.APP;
CONFIG.port = process.env.PORT;
CONFIG.uri_prefix_main = process.env.URI_PREFIX_MAIN;

CONFIG.log_path = 'log';
CONFIG.log_level = 'info';
CONFIG.log_level_exceptions = 'debug';

CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;

CONFIG.token_expire = 60 * 60;
CONFIG.token_status = 'jldphilatelie';


CONFIG.mail_transport_smtp_domain = process.env.MAIL_TRANSPORT_SMTP_DOMAIN
CONFIG.mail_transport_smtp_port = process.env.MAIL_TRANSPORT_SMTP_PORT
CONFIG.mail_transport_smtp_login = process.env.MAIL_SMTP_TRANSPORT_LOGIN
CONFIG.mail_transport_smtp_pwd = process.env.MAIL_SMTP_TRANSPORT_PWD



CONFIG.mail_sender_address = process.env.MAIL_SENDER_ADDRESS
CONFIG.mail_sender_destination = process.env.MAIL_SENDER_DESTINATION
CONFIG.mail_sender_pwd = process.env.MAIL_SENDER_PWD

module.exports = CONFIG;