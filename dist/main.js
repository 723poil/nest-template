/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    faviconIco(res) {
        res.status(204).send();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("favicon.ico"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "faviconIco", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)({
        version: "",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const core_module_1 = __webpack_require__(/*! ./core/core.module */ "./src/core/core.module.ts");
const apiModule = [auth_module_1.AuthModule];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [core_module_1.CoreModule, ...apiModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_repository_1 = __webpack_require__(/*! ./repository/auth.repository */ "./src/auth/repository/auth.repository.ts");
const auth_expired_jwt_service_1 = __webpack_require__(/*! ./service/auth.expired.jwt.service */ "./src/auth/service/auth.expired.jwt.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                global: true,
                useFactory: (configService) => {
                    return {
                        secret: configService.get("JWT_ACCESS_SECRET"),
                        signOptions: {
                            expiresIn: `${configService.get("JWT_ACCESS_EXPIRATION_TIME")}m`,
                        },
                    };
                },
            }),
        ],
        controllers: [],
        providers: [auth_expired_jwt_service_1.authExpiredJwtService, auth_repository_1.AuthRepository],
        exports: [passport_1.PassportModule],
    })
], AuthModule);


/***/ }),

/***/ "./src/auth/repository/auth.repository.ts":
/*!************************************************!*\
  !*** ./src/auth/repository/auth.repository.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_repository_1 = __webpack_require__(/*! src/core/database/base.repository */ "./src/core/database/base.repository.ts");
let AuthRepository = class AuthRepository extends base_repository_1.BaseRepository {
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)()
], AuthRepository);


/***/ }),

/***/ "./src/auth/service/auth.expired.jwt.service.ts":
/*!******************************************************!*\
  !*** ./src/auth/service/auth.expired.jwt.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authExpiredJwtService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_repository_1 = __webpack_require__(/*! ../repository/auth.repository */ "./src/auth/repository/auth.repository.ts");
let authExpiredJwtService = class authExpiredJwtService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
};
exports.authExpiredJwtService = authExpiredJwtService;
exports.authExpiredJwtService = authExpiredJwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_repository_1.AuthRepository !== "undefined" && auth_repository_1.AuthRepository) === "function" ? _a : Object])
], authExpiredJwtService);


/***/ }),

/***/ "./src/core/async-local-storage/async.local.storage.ts":
/*!*************************************************************!*\
  !*** ./src/core/async-local-storage/async.local.storage.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUuid = exports.getStore = exports.asyncLocalStorage = void 0;
const async_hooks_1 = __webpack_require__(/*! async_hooks */ "async_hooks");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const storage_const_1 = __webpack_require__(/*! ./storage.const */ "./src/core/async-local-storage/storage.const.ts");
exports.asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
const getStore = () => {
    return exports.asyncLocalStorage.getStore();
};
exports.getStore = getStore;
const getUuid = () => {
    const store = (0, exports.getStore)();
    if ((0, class_validator_1.isEmpty)(store))
        return undefined;
    return store.get(storage_const_1.STORAGE_CONST.UUID_MANAGER) ?? undefined;
};
exports.getUuid = getUuid;


/***/ }),

/***/ "./src/core/async-local-storage/storage.const.ts":
/*!*******************************************************!*\
  !*** ./src/core/async-local-storage/storage.const.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STORAGE_CONST = void 0;
exports.STORAGE_CONST = {
    KYSELY_TRANSACTION_MANAGER: "storage/transaction-manager",
    KYSELY_TRANSACTION_APPLY_MANAGER: "storage/transaction-apply-manager",
    UUID_MANAGER: "storage/uuid",
};


/***/ }),

/***/ "./src/core/base/base.component.ts":
/*!*****************************************!*\
  !*** ./src/core/base/base.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseComponent = void 0;
const logger_1 = __webpack_require__(/*! ../logger/logger */ "./src/core/logger/logger.ts");
class BaseComponent {
    constructor() {
        this.tag = this.constructor.name;
        this.logger = (0, logger_1.logger)(this.tag);
    }
    info(message) {
        this.logger.info(message);
    }
    warn(message) {
        this.logger.warn(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    error(message) {
        this.logger.error(message);
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/core/core.module.ts":
/*!*********************************!*\
  !*** ./src/core/core.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreModule = void 0;
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const logger_middleware_1 = __webpack_require__(/*! src/core/middlewares/logger/logger.middleware */ "./src/core/middlewares/logger/logger.middleware.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/core/database/database.module.ts");
const prometheus_interceptor_1 = __webpack_require__(/*! ./interceptors/prometheus/prometheus.interceptor */ "./src/core/interceptors/prometheus/prometheus.interceptor.ts");
const exception_filter_1 = __webpack_require__(/*! ./filters/exception/exception.filter */ "./src/core/filters/exception/exception.filter.ts");
const storage_middleware_1 = __webpack_require__(/*! ./middlewares/storage/storage.middleware */ "./src/core/middlewares/storage/storage.middleware.ts");
const configModule = config_1.ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.env.MODE}.env`,
});
const httpModule = {
    ...axios_1.HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    }),
    global: true,
};
const modules = [configModule, database_module_1.DatabaseModule, httpModule];
const providers = [
    { provide: core_1.APP_INTERCEPTOR, useClass: prometheus_interceptor_1.PrometheusInterceptor },
    { provide: core_1.APP_FILTER, useClass: exception_filter_1.AllExceptionFilter },
];
let CoreModule = class CoreModule {
    configure(consumer) {
        consumer.apply(storage_middleware_1.StorageMiddleware, logger_middleware_1.LoggerMiddleware).forRoutes("*");
    }
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [...modules],
        providers: [...providers],
    })
], CoreModule);


/***/ }),

/***/ "./src/core/database/base.repository.ts":
/*!**********************************************!*\
  !*** ./src/core/database/base.repository.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const async_local_storage_1 = __webpack_require__(/*! src/core/async-local-storage/async.local.storage */ "./src/core/async-local-storage/async.local.storage.ts");
const storage_const_1 = __webpack_require__(/*! src/core/async-local-storage/storage.const */ "./src/core/async-local-storage/storage.const.ts");
const unhandled_exception_1 = __webpack_require__(/*! src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception */ "./src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception.ts");
const kysely_service_1 = __webpack_require__(/*! ./kysely.service */ "./src/core/database/kysely.service.ts");
let BaseRepository = class BaseRepository {
    constructor(kyselyService) {
        this.kyselyService = kyselyService;
        this.kdb = this.kyselyService.DB;
    }
    db() {
        const store = async_local_storage_1.asyncLocalStorage.getStore();
        if ((0, class_validator_1.isEmpty)(store)) {
            throw new unhandled_exception_1.UnhandledException("서버 에러가 발생하였습니다.", `${storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_MANAGER}-store is not active`);
        }
        const isTransactional = store.get(storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_APPLY_MANAGER);
        const connection = isTransactional
            ? store.get(storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_MANAGER)
            : this.kdb;
        if ((0, class_validator_1.isEmpty)(connection)) {
            throw new unhandled_exception_1.UnhandledException("서버 에러가 발생하였습니다.", `${storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_MANAGER}-connection is not active`);
        }
        return connection;
    }
};
exports.BaseRepository = BaseRepository;
exports.BaseRepository = BaseRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof kysely_service_1.KyselyService !== "undefined" && kysely_service_1.KyselyService) === "function" ? _a : Object])
], BaseRepository);


/***/ }),

/***/ "./src/core/database/database.module.ts":
/*!**********************************************!*\
  !*** ./src/core/database/database.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const kysely_service_1 = __webpack_require__(/*! ./kysely.service */ "./src/core/database/kysely.service.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [kysely_service_1.KyselyService],
        exports: [kysely_service_1.KyselyService],
    })
], DatabaseModule);


/***/ }),

/***/ "./src/core/database/kysely.service.ts":
/*!*********************************************!*\
  !*** ./src/core/database/kysely.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KyselyService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const kysely_1 = __webpack_require__(/*! kysely */ "kysely");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mysql2_1 = __webpack_require__(/*! mysql2 */ "mysql2");
let KyselyService = class KyselyService {
    constructor(configService) {
        this.configService = configService;
        this.db = new kysely_1.Kysely({
            dialect: new kysely_1.MysqlDialect({
                pool: (0, mysql2_1.createPool)({
                    host: configService.get("DB_HOST"),
                    port: configService.get("DB_PORT"),
                    user: configService.get("DB_USER"),
                    password: configService.get("DB_PASSWORD"),
                    database: configService.get("DB_SCHEMA"),
                }),
            }),
            log: process.env.MODE !== "test" ? ["query", "error"] : ["error"],
        });
    }
    get DB() {
        return this.db;
    }
    onModuleInit() { }
    async onModuleDestroy() {
        await this.db.destroy();
    }
};
exports.KyselyService = KyselyService;
exports.KyselyService = KyselyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], KyselyService);


/***/ }),

/***/ "./src/core/exception/const/bad.request.const.ts":
/*!*******************************************************!*\
  !*** ./src/core/exception/const/bad.request.const.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.badRequestConst = void 0;
exports.badRequestConst = {
    INVALID_SOCIAL_PROVIDER: "0101",
    MISSING_REQ_ITEM: "0102",
    INVALID_AUTH_CODE_TYPE: "0103",
    INVALID_MODE: "0104",
    INVALID_PASSWORD: "0105",
    INVALID_ORDER_MODE: "0106",
    UNSATISFIED_STAMP_CONDITION: "0107",
    UNSATISFIED_COUPON_CONDITION: "0108",
};


/***/ }),

/***/ "./src/core/exception/const/internal.server.error.const.ts":
/*!*****************************************************************!*\
  !*** ./src/core/exception/const/internal.server.error.const.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.internalServerErrorConst = void 0;
exports.internalServerErrorConst = {
    UnHandled: "9999",
    FAIL_CHANGE: "0301",
    FAIL_CREATE: "0302",
    FAIL_DELETE: "0303",
    FAIL_PAYMENT: "0304",
    FAIL_APPROVAL: "0305",
    FAIL_SAVE_FILE: "0306",
    FAIL_APPROVAL_CANCEL: "0307",
};


/***/ }),

/***/ "./src/core/exception/const/unauthorized.const.ts":
/*!********************************************************!*\
  !*** ./src/core/exception/const/unauthorized.const.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unauthorizedConst = void 0;
exports.unauthorizedConst = {
    OTHER_LINKED: "0001",
    PROBLEM_IN_SOCIAL_LOGIN: "0002",
    LOGGED_OUT_ACCESS_TOKEN: "0003",
    LOGGED_OUT_REFRESH_TOKEN: "0004",
    EXPIRED_TOKEN: "0005",
    NON_MEMBER: "0006",
    FAIL_UNLINK: "0007",
    INVALID_CREDENTIAL: "0008",
    SIGNED_UP_FOR_SOCIAL: "0009",
};


/***/ }),

/***/ "./src/core/exception/exceptions/bad-request/bad.request.exception.ts":
/*!****************************************************************************!*\
  !*** ./src/core/exception/exceptions/bad-request/bad.request.exception.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BadRequestException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const custom_exception_1 = __webpack_require__(/*! ../../impl/custom.exception */ "./src/core/exception/impl/custom.exception.ts");
class BadRequestException extends custom_exception_1.CustomException {
    constructor(errorCode, message) {
        super(errorCode, common_1.HttpStatus.BAD_REQUEST, message);
    }
}
exports.BadRequestException = BadRequestException;


/***/ }),

/***/ "./src/core/exception/exceptions/bad-request/impl/missing.req.item.exception.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/exception/exceptions/bad-request/impl/missing.req.item.exception.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MissingReqItemException = void 0;
const bad_request_const_1 = __webpack_require__(/*! src/core/exception/const/bad.request.const */ "./src/core/exception/const/bad.request.const.ts");
const bad_request_exception_1 = __webpack_require__(/*! ../bad.request.exception */ "./src/core/exception/exceptions/bad-request/bad.request.exception.ts");
class MissingReqItemException extends bad_request_exception_1.BadRequestException {
    constructor(reqItems) {
        super(bad_request_const_1.badRequestConst.MISSING_REQ_ITEM, process.env.MODE !== "prod"
            ? `조건을 충족하지 못하는 값이 있습니다. (${reqItems.join(" or ")})`
            : "요청값이 조건을 만족하지 않아요. 다시 한 번 확인해주세요!");
    }
}
exports.MissingReqItemException = MissingReqItemException;


/***/ }),

/***/ "./src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception.ts":
/*!*****************************************************************************************!*\
  !*** ./src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnhandledException = void 0;
const internal_server_exception_1 = __webpack_require__(/*! ../internal.server.exception */ "./src/core/exception/exceptions/internal-server-error/internal.server.exception.ts");
const internal_server_error_const_1 = __webpack_require__(/*! ../../../const/internal.server.error.const */ "./src/core/exception/const/internal.server.error.const.ts");
class UnhandledException extends internal_server_exception_1.InternalServerException {
    constructor(message = "서버 에러가 발생하였습니다.", stack) {
        super(internal_server_error_const_1.internalServerErrorConst.UnHandled, message, stack);
    }
}
exports.UnhandledException = UnhandledException;


/***/ }),

/***/ "./src/core/exception/exceptions/internal-server-error/internal.server.exception.ts":
/*!******************************************************************************************!*\
  !*** ./src/core/exception/exceptions/internal-server-error/internal.server.exception.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InternalServerException = void 0;
const custom_exception_1 = __webpack_require__(/*! ../../impl/custom.exception */ "./src/core/exception/impl/custom.exception.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class InternalServerException extends custom_exception_1.CustomException {
    constructor(errorCode, message, stack) {
        super(errorCode, common_1.HttpStatus.INTERNAL_SERVER_ERROR, message, stack);
    }
}
exports.InternalServerException = InternalServerException;


/***/ }),

/***/ "./src/core/exception/exceptions/unauthorized/impl/expired.token.exception.ts":
/*!************************************************************************************!*\
  !*** ./src/core/exception/exceptions/unauthorized/impl/expired.token.exception.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpiredTokenException = void 0;
const unauthorized_const_1 = __webpack_require__(/*! src/core/exception/const/unauthorized.const */ "./src/core/exception/const/unauthorized.const.ts");
const unauthorized_exception_1 = __webpack_require__(/*! ../unauthorized.exception */ "./src/core/exception/exceptions/unauthorized/unauthorized.exception.ts");
class ExpiredTokenException extends unauthorized_exception_1.UnauthorizedException {
    constructor(message = "만료된 토큰입니다.") {
        super(unauthorized_const_1.unauthorizedConst.EXPIRED_TOKEN, message);
    }
}
exports.ExpiredTokenException = ExpiredTokenException;


/***/ }),

/***/ "./src/core/exception/exceptions/unauthorized/unauthorized.exception.ts":
/*!******************************************************************************!*\
  !*** ./src/core/exception/exceptions/unauthorized/unauthorized.exception.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnauthorizedException = void 0;
const custom_exception_1 = __webpack_require__(/*! ../../impl/custom.exception */ "./src/core/exception/impl/custom.exception.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class UnauthorizedException extends custom_exception_1.CustomException {
    constructor(errorCode, message, stack) {
        super(errorCode, common_1.HttpStatus.UNAUTHORIZED, message, stack);
    }
}
exports.UnauthorizedException = UnauthorizedException;


/***/ }),

/***/ "./src/core/exception/impl/custom.exception.ts":
/*!*****************************************************!*\
  !*** ./src/core/exception/impl/custom.exception.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const date_conversion_1 = __webpack_require__(/*! src/utils/date.conversion */ "./src/utils/date.conversion.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CustomException extends common_1.HttpException {
    constructor(errorCode, statusCode, message, stack) {
        super(errorCode, statusCode);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.message = message;
        this.stack = stack;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    toRes(path, message) {
        return {
            errorCode: this.errorCode,
            statusCode: this.statusCode,
            message: (0, class_validator_1.isEmpty)(message) ? this.message : message,
            timestamp: (0, date_conversion_1.formatYmdHisKo)(),
            path: path,
            data: this.data,
        };
    }
}
exports.CustomException = CustomException;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomException.prototype, "errorCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CustomException.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomException.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CustomException.prototype, "data", void 0);


/***/ }),

/***/ "./src/core/filters/exception/exception.filter.ts":
/*!********************************************************!*\
  !*** ./src/core/filters/exception/exception.filter.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unhandled_exception_1 = __webpack_require__(/*! src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception */ "./src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception.ts");
const expired_token_exception_1 = __webpack_require__(/*! src/core/exception/exceptions/unauthorized/impl/expired.token.exception */ "./src/core/exception/exceptions/unauthorized/impl/expired.token.exception.ts");
const custom_exception_1 = __webpack_require__(/*! src/core/exception/impl/custom.exception */ "./src/core/exception/impl/custom.exception.ts");
const winston_logger_1 = __webpack_require__(/*! src/core/logger/winston.logger */ "./src/core/logger/winston.logger.ts");
const date_conversion_1 = __webpack_require__(/*! src/utils/date.conversion */ "./src/utils/date.conversion.ts");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const timestamp = (0, date_conversion_1.formatYmdHisKo)();
        const path = request.url;
        if (exception instanceof common_1.UnauthorizedException) {
            winston_logger_1.winstonLogger.error(exception);
            exception = new expired_token_exception_1.ExpiredTokenException();
        }
        if (process.env.MODE !== "test") {
            winston_logger_1.winstonLogger.error(exception);
        }
        const res = exception instanceof custom_exception_1.CustomException ? exception : new unhandled_exception_1.UnhandledException();
        if (process.env.MODE !== "test") {
            winston_logger_1.winstonLogger.error(`${res.statusCode}(${res.errorCode}): ${res.message} ${path}, query: ${JSON.stringify(request.query)}, params: ${JSON.stringify(request.params)}, body: ${JSON.stringify(request.body)}`);
        }
        response.status(res.statusCode).json({
            errorCode: res.errorCode,
            statusCode: res.statusCode,
            message: res.message,
            timestamp: timestamp,
            path: path,
        });
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);


/***/ }),

/***/ "./src/core/interceptors/prometheus/prometheus.interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/core/interceptors/prometheus/prometheus.interceptor.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrometheusInterceptor_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrometheusInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const prom_client_1 = __webpack_require__(/*! prom-client */ "prom-client");
const winston_logger_1 = __webpack_require__(/*! src/core/logger/winston.logger */ "./src/core/logger/winston.logger.ts");
let PrometheusInterceptor = PrometheusInterceptor_1 = class PrometheusInterceptor {
    constructor() {
        this.requestSuccessHistogram = new prom_client_1.Histogram({
            name: "nestjs_success_requests",
            help: "NestJs success requests - duration in seconds",
            labelNames: ["handler", "controller", "method", "status"],
            buckets: [0.0001, 0.001, 0.005, 0.01, 0.025, 0.05, 0.075, 0.09, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
        });
        this.requestFailHistogram = new prom_client_1.Histogram({
            name: "nestjs_fail_requests",
            help: "NestJs fail requests - duration in seconds",
            labelNames: ["handler", "controller", "status", "method"],
            buckets: [0.0001, 0.001, 0.005, 0.01, 0.025, 0.05, 0.075, 0.09, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
        });
        this.failureCounter = new prom_client_1.Counter({
            name: "nestjs_requests_failed_count",
            help: "NestJs requests that failed",
            labelNames: ["handler", "controller", "status", "method"],
        });
    }
    static registerServiceInfo(serviceInfo) {
        new prom_client_1.Gauge({
            name: "nestjs_info",
            help: "NestJs service version info",
            labelNames: ["domain", "name", "version"],
        }).set({
            domain: serviceInfo.domain,
            name: `${serviceInfo.domain}.${serviceInfo.name}`,
            version: serviceInfo.version,
        }, 1);
        return new PrometheusInterceptor_1();
    }
    onModuleInit() {
        this.requestSuccessHistogram.reset();
        this.requestFailHistogram.reset();
        this.failureCounter.reset();
    }
    intercept(context, next) {
        const originUrl = context.switchToHttp().getRequest().url.toString();
        const method = context.switchToHttp().getRequest().method.toString();
        const labels = {
            controller: context.getClass().name,
            handler: context.getHandler().name,
            method: method,
            status: context.switchToHttp().getResponse().statusCode,
        };
        const failLabels = {
            ...labels,
            status: context.switchToHttp().getResponse().statusCode,
        };
        try {
            const requestSuccessTimer = this.requestSuccessHistogram.startTimer(labels);
            const requestFailTimer = this.requestFailHistogram.startTimer(failLabels);
            return next.handle().pipe((0, rxjs_1.tap)({
                next: () => {
                    if (this.isAvailableMetricsUrl(originUrl)) {
                        requestSuccessTimer();
                    }
                },
                error: () => {
                    if (this.isAvailableMetricsUrl(originUrl)) {
                        requestFailTimer();
                        this.failureCounter.labels(failLabels).inc(1);
                    }
                },
            }));
        }
        catch (error) {
            winston_logger_1.winstonLogger.error("[PROMETHEUS] handler error");
        }
    }
    isAvailableMetricsUrl(url) {
        const excludePaths = "metrics";
        if (url.includes(excludePaths)) {
            return false;
        }
        return true;
    }
};
exports.PrometheusInterceptor = PrometheusInterceptor;
exports.PrometheusInterceptor = PrometheusInterceptor = PrometheusInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], PrometheusInterceptor);


/***/ }),

/***/ "./src/core/interceptors/setup.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/core/interceptors/setup.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setNestAppInterceptors = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const setNestAppInterceptors = (app) => {
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
};
exports.setNestAppInterceptors = setNestAppInterceptors;


/***/ }),

/***/ "./src/core/logger/logger.ts":
/*!***********************************!*\
  !*** ./src/core/logger/logger.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logger = void 0;
const async_local_storage_1 = __webpack_require__(/*! ../async-local-storage/async.local.storage */ "./src/core/async-local-storage/async.local.storage.ts");
const winston_logger_1 = __webpack_require__(/*! ./winston.logger */ "./src/core/logger/winston.logger.ts");
const logger = (tag) => {
    const info = (message) => {
        winston_logger_1.winstonLogger.log(message, [`${(0, async_local_storage_1.getUuid)()}`, `${tag}`]);
    };
    const warn = (message) => {
        winston_logger_1.winstonLogger.warn(message, [`${(0, async_local_storage_1.getUuid)()}`, `${tag}`]);
    };
    const debug = (message) => {
        winston_logger_1.winstonLogger.debug(message, [`${(0, async_local_storage_1.getUuid)()}`, `${tag}`]);
    };
    const error = (message) => {
        winston_logger_1.winstonLogger.error(`[${(0, async_local_storage_1.getUuid)()}, ${tag}] ${message}`, message?.stack ?? undefined);
    };
    return {
        info,
        warn,
        debug,
        error,
    };
};
exports.logger = logger;


/***/ }),

/***/ "./src/core/logger/winston.logger.ts":
/*!*******************************************!*\
  !*** ./src/core/logger/winston.logger.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.winstonLogger = void 0;
const winston_daily_rotate_file_1 = __importDefault(__webpack_require__(/*! winston-daily-rotate-file */ "winston-daily-rotate-file"));
const nest_winston_1 = __webpack_require__(/*! nest-winston */ "nest-winston");
const winston_1 = __importDefault(__webpack_require__(/*! winston */ "winston"));
const dailyOption = (level) => {
    let fileLevel = level;
    const LOG_DIR = process.env.LOG_DIR;
    if (level !== "warn" && level !== "debug" && level !== "error") {
        fileLevel = "info";
    }
    return {
        level,
        datePattern: "YYYY-MM-DD",
        dirname: LOG_DIR + fileLevel,
        filename: `%DATE%.${fileLevel}.log`,
        zippedArchive: true,
        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), nest_winston_1.utilities.format.nestLike(process.env.MODE, {
            colors: false,
            prettyPrint: false,
        })),
    };
};
const transportList = [
    new winston_1.default.transports.Console({
        level: process.env.MODE !== "prod" ? "debug" : "info",
        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), nest_winston_1.utilities.format.nestLike(process.env.MODE, {
            colors: true,
            prettyPrint: true,
        })),
    }),
    new winston_daily_rotate_file_1.default(dailyOption("info")),
    new winston_daily_rotate_file_1.default(dailyOption("warn")),
    new winston_daily_rotate_file_1.default(dailyOption("error")),
];
if (process.env.MODE !== "prod") {
    transportList.push(new winston_daily_rotate_file_1.default(dailyOption("debug")));
}
exports.winstonLogger = nest_winston_1.WinstonModule.createLogger({
    transports: transportList,
});


/***/ }),

/***/ "./src/core/middlewares/logger/logger.middleware.ts":
/*!**********************************************************!*\
  !*** ./src/core/middlewares/logger/logger.middleware.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_component_1 = __webpack_require__(/*! src/core/base/base.component */ "./src/core/base/base.component.ts");
let LoggerMiddleware = class LoggerMiddleware extends base_component_1.BaseComponent {
    use(request, response, next) {
        const { ip, method, originalUrl } = request;
        const userAgent = request.get("user-agent") || "";
        const startTime = new Date().getTime();
        if (!originalUrl.endsWith("metrics") && process.env.MODE !== "test") {
            this.info(`${method}:Req ${originalUrl} - ${userAgent} ${ip}`);
        }
        response.on("finish", () => {
            const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(3) + "s";
            const { statusCode } = response;
            const contentLength = response.get("content-length");
            const message = `${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} elapsedTime: ${elapsedTime}`;
            if (process.env.MODE === "test")
                return;
            if (originalUrl.endsWith("metrics"))
                return;
            if (statusCode >= 500) {
                this.error(message);
                return;
            }
            if (statusCode >= 400) {
                this.warn(message);
                return;
            }
            this.info(message);
        });
        next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);


/***/ }),

/***/ "./src/core/middlewares/storage/storage.middleware.ts":
/*!************************************************************!*\
  !*** ./src/core/middlewares/storage/storage.middleware.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StorageMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const async_local_storage_1 = __webpack_require__(/*! src/core/async-local-storage/async.local.storage */ "./src/core/async-local-storage/async.local.storage.ts");
const base_component_1 = __webpack_require__(/*! src/core/base/base.component */ "./src/core/base/base.component.ts");
const kysely_service_1 = __webpack_require__(/*! src/core/database/kysely.service */ "./src/core/database/kysely.service.ts");
const unhandled_exception_1 = __webpack_require__(/*! src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception */ "./src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const storage_const_1 = __webpack_require__(/*! ../../async-local-storage/storage.const */ "./src/core/async-local-storage/storage.const.ts");
let StorageMiddleware = class StorageMiddleware extends base_component_1.BaseComponent {
    constructor(kyselyService) {
        super();
        this.kyselyService = kyselyService;
        this.db = this.kyselyService.DB;
    }
    use(req, res, next) {
        if (process.env.MODE !== "test") {
            this.debug("Hit");
        }
        async_local_storage_1.asyncLocalStorage.run(new Map(), () => {
            if (process.env.MODE !== "test") {
                this.debug(`Run AsyncLocalStorage`);
            }
            this.setConnection();
            next();
        });
    }
    setConnection() {
        const store = async_local_storage_1.asyncLocalStorage.getStore();
        if (store) {
            const uuid = (0, uuid_1.v4)().replace(/-/g, "");
            store.set(storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_MANAGER, this.db);
            store.set(storage_const_1.STORAGE_CONST.KYSELY_TRANSACTION_APPLY_MANAGER, false);
            store.set(storage_const_1.STORAGE_CONST.UUID_MANAGER, uuid);
            if (process.env.MODE !== "test") {
                this.debug(`Set connection in AsyncLocalStorage`);
            }
        }
        else {
            if (process.env.MODE !== "test") {
                this.error(`AsyncLocalStorage store is not available`);
            }
            throw new unhandled_exception_1.UnhandledException();
        }
    }
};
exports.StorageMiddleware = StorageMiddleware;
exports.StorageMiddleware = StorageMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof kysely_service_1.KyselyService !== "undefined" && kysely_service_1.KyselyService) === "function" ? _a : Object])
], StorageMiddleware);


/***/ }),

/***/ "./src/core/pipe/setup.pipe.ts":
/*!*************************************!*\
  !*** ./src/core/pipe/setup.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setNestAppPipes = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const missing_req_item_exception_1 = __webpack_require__(/*! ../exception/exceptions/bad-request/impl/missing.req.item.exception */ "./src/core/exception/exceptions/bad-request/impl/missing.req.item.exception.ts");
const winston_logger_1 = __webpack_require__(/*! ../logger/winston.logger */ "./src/core/logger/winston.logger.ts");
const setNestAppPipes = (app) => {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => {
            const properties = errors.map((error) => {
                if (process.env.MODE !== "test") {
                    winston_logger_1.winstonLogger.error(error);
                }
                if (error.children[0]?.property) {
                    return `${error.property}.${error.children[0].property}`;
                }
                if (error.property) {
                    return error.property;
                }
                return "unknown";
            });
            return new missing_req_item_exception_1.MissingReqItemException(properties);
        },
    }));
};
exports.setNestAppPipes = setNestAppPipes;


/***/ }),

/***/ "./src/core/swagger/setup.swagger.ts":
/*!*******************************************!*\
  !*** ./src/core/swagger/setup.swagger.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setNestSwagger = void 0;
const process_1 = __importDefault(__webpack_require__(/*! process */ "process"));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const express_basic_auth_1 = __importDefault(__webpack_require__(/*! express-basic-auth */ "express-basic-auth"));
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const date_conversion_1 = __webpack_require__(/*! src/utils/date.conversion */ "./src/utils/date.conversion.ts");
const swagger_themes_1 = __webpack_require__(/*! swagger-themes */ "swagger-themes");
const setNestSwagger = (app) => {
    const configService = app.get(config_1.ConfigService);
    if (process_1.default.env.MODE === "prod") {
        return;
    }
    if (process_1.default.env.MODE !== "local") {
        app.use([`/swagger`], (0, express_basic_auth_1.default)({
            users: {
                shopchain: configService.get("SWAGGER_PWD"),
            },
            challenge: true,
        }));
    }
    const config = new swagger_1.DocumentBuilder()
        .setTitle(`nest-template`)
        .setDescription(`nest-template API description ${(0, date_conversion_1.formatDtm)()}`)
        .setVersion("1.0")
        .addBearerAuth()
        .addSecurityRequirements("bearer");
    const options = {
        ignoreGlobalPrefix: false,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config.build(), options);
    const theme = new swagger_themes_1.SwaggerTheme();
    const themeDarkOptions = {
        customCss: theme.getBuffer(swagger_themes_1.SwaggerThemeNameEnum.ONE_DARK),
    };
    swagger_1.SwaggerModule.setup(`swagger`, app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
};
exports.setNestSwagger = setNestSwagger;


/***/ }),

/***/ "./src/utils/date.conversion.ts":
/*!**************************************!*\
  !*** ./src/utils/date.conversion.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addMonthsToDt = exports.formatYmdHisSSS = exports.formatDt = exports.formatDtm = exports.convertToTimeStamp = exports.formatYmdHisKoOnlyNumber = exports.formatYmdHisKo = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const formatYmdHisKo = (date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    const year = date.toLocaleString("ko-KR", {
        year: "numeric",
        timeZone: "Asia/Seoul",
    });
    const month = date.toLocaleString("ko-KR", {
        month: "numeric",
        timeZone: "Asia/Seoul",
    });
    const day = date.toLocaleString("ko-KR", {
        day: "numeric",
        timeZone: "Asia/Seoul",
    });
    const hour = date.toLocaleString("ko-KR", {
        hour: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
    });
    const minute = date.toLocaleString("ko-KR", {
        minute: "numeric",
        timeZone: "Asia/Seoul",
    });
    const second = date.toLocaleString("ko-KR", {
        second: "numeric",
        timeZone: "Asia/Seoul",
    });
    return [
        [year.replace(/[년]/g, "") + "년 ", month.replace(/[월]/g, "") + "월 ", day.replace(/[일]/g, "") + "일 "].join(""),
        [hour.replace(/[시]/g, "") + "시 ", minute + "분 ", second + "초"].join(""),
    ].join("");
};
exports.formatYmdHisKo = formatYmdHisKo;
const formatYmdHisKoOnlyNumber = (date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    return parseDate(date)
        .join("")
        .replaceAll(" ", "")
        .replace(/[년월일시]/g, "");
};
exports.formatYmdHisKoOnlyNumber = formatYmdHisKoOnlyNumber;
const convertToTimeStamp = (dateDtmString) => {
    return new Date(dateDtmString + " GMT+0900");
};
exports.convertToTimeStamp = convertToTimeStamp;
const formatDtm = (date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    const [year, month, day, hour, minute, second] = parseDate(date);
    return [[year, month, day].join("-"), [hour, minute, second].join(":")].join(" ").replace(/[년월일시]/g, "");
};
exports.formatDtm = formatDtm;
const formatDt = (date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    const [year, month, day] = parseDate(date);
    return [year, month, day].join("-").replace(/[년월일]/g, "");
};
exports.formatDt = formatDt;
const formatYmdHisSSS = (date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    const [year, month, day, hour, minute, second] = parseDate(date);
    return [year, month, day, hour, minute, second, String(date.getMilliseconds()).padStart(3, "0")]
        .join("")
        .replaceAll(" ", "")
        .replace(/[년월일시]/g, "");
};
exports.formatYmdHisSSS = formatYmdHisSSS;
function parseDate(date) {
    const year = date.toLocaleString("ko-KR", {
        year: "numeric",
        timeZone: "Asia/Seoul",
    });
    const month = date.toLocaleString("ko-KR", {
        month: "2-digit",
        timeZone: "Asia/Seoul",
    });
    const day = date.toLocaleString("ko-KR", {
        day: "2-digit",
        timeZone: "Asia/Seoul",
    });
    const hour = date.toLocaleString("ko-KR", {
        hour: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
    });
    const minute = date
        .toLocaleString("ko-KR", {
        minute: "2-digit",
        timeZone: "Asia/Seoul",
    })
        .padStart(2, "0");
    const second = date
        .toLocaleString("ko-KR", {
        second: "2-digit",
        timeZone: "Asia/Seoul",
    })
        .padStart(2, "0");
    return [year, month, day, hour, minute, second];
}
const addMonthsToDt = (months, date = new Date()) => {
    if (typeof date === "string") {
        return date;
    }
    if ((0, class_validator_1.isEmpty)(date)) {
        return "";
    }
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return (0, exports.formatDt)(newDate);
};
exports.addMonthsToDt = addMonthsToDt;


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-basic-auth":
/*!*************************************!*\
  !*** external "express-basic-auth" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-basic-auth");

/***/ }),

/***/ "kysely":
/*!*************************!*\
  !*** external "kysely" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("kysely");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "nest-winston":
/*!*******************************!*\
  !*** external "nest-winston" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("nest-winston");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "prom-client":
/*!******************************!*\
  !*** external "prom-client" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("prom-client");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "swagger-themes":
/*!*********************************!*\
  !*** external "swagger-themes" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("swagger-themes");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "winston-daily-rotate-file":
/*!********************************************!*\
  !*** external "winston-daily-rotate-file" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const setup_interceptor_1 = __webpack_require__(/*! ./core/interceptors/setup.interceptor */ "./src/core/interceptors/setup.interceptor.ts");
const winston_logger_1 = __webpack_require__(/*! ./core/logger/winston.logger */ "./src/core/logger/winston.logger.ts");
const setup_pipe_1 = __webpack_require__(/*! ./core/pipe/setup.pipe */ "./src/core/pipe/setup.pipe.ts");
const setup_swagger_1 = __webpack_require__(/*! ./core/swagger/setup.swagger */ "./src/core/swagger/setup.swagger.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: winston_logger_1.winstonLogger,
    });
    app.enableCors({
        origin: "*",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        preflightContinue: false,
        maxAge: 86400,
        credentials: true,
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: "1",
    });
    (0, setup_interceptor_1.setNestAppInterceptors)(app);
    (0, setup_pipe_1.setNestAppPipes)(app);
    (0, setup_swagger_1.setNestSwagger)(app);
    await app.listen(process.env.PORT);
}
bootstrap();

})();

/******/ })()
;