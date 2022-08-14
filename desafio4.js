var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var apiKey;
var listId;
var mediaName;
var password;
var requestToken;
var sessionId;
var username;
var messagesSpan = document.getElementById("messages");
var loginInput = document.getElementById("login");
var passwordInput = document.getElementById("password");
var apiKeyInput = document.getElementById("api-key");
var loginButton = document.getElementById("login-button");
var logoutButton = document.getElementById("logout-button");
var searchMediaByNameInput = document.getElementById("search-media-by-name");
var searchMediaByNameButton = document.getElementById("search-media-by-name-button");
var searchMediaByListInput = document.getElementById("search-media-by-list-id");
var searchMediaByListButton = document.getElementById("search-media-by-list-button");
var searchContainer = document.getElementById("search-container");
var divList = document.getElementById("div-list-container");
var createListNameInput = document.getElementById("create-list-name");
var createListDescriptionInput = document.getElementById("create-list-description");
var createListButton = document.getElementById("create-list-button");
var addMediaToListInputIdMedia = document.getElementById("add-media-to-list-id-media");
var addMediaToListInputIdList = document.getElementById("add-media-to-list-id-list");
var addMediaToListButton = document.getElementById("add-media-to-list-button");
loginButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                showMessage("success", "");
                username = loginInput.value;
                if (!username) {
                    showMessage("error", "Informe o nome do usuário");
                    return [2 /*return*/];
                }
                password = passwordInput.value;
                if (!password) {
                    showMessage("error", "Informe a senha");
                    return [2 /*return*/];
                }
                apiKey = apiKeyInput.value;
                if (!apiKey) {
                    showMessage("error", "Informe a chave da api");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createRequestToken()];
            case 1:
                _a.sent();
                return [4 /*yield*/, login()];
            case 2:
                _a.sent();
                return [4 /*yield*/, createSession()];
            case 3:
                _a.sent();
                if (sessionId) {
                    blockForms(false);
                    blockLoginForm(true);
                }
                return [2 /*return*/];
        }
    });
}); });
logoutButton.addEventListener("click", function () {
    showMessage("success", "");
    clearForms();
    blockForms(true);
    blockLoginForm(false);
});
searchMediaByNameButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        showMessage("success", "");
        mediaName = searchMediaByNameInput.value;
        if (!mediaName) {
            showMessage("error", "Informe o nome da mídia");
            return [2 /*return*/];
        }
        createListByMediaName("1");
        searchMediaByNameInput.value = "";
        return [2 /*return*/];
    });
}); });
searchMediaByListButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        listId = searchMediaByListInput.value;
        if (!listId) {
            showMessage("error", "Informe o ID da lista");
            return [2 /*return*/];
        }
        showMessage("success", "");
        createListByListId();
        searchMediaByListInput.value = "";
        return [2 /*return*/];
    });
}); });
createListButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var name, description, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                showMessage("success", "");
                name = createListNameInput.value;
                if (!name) {
                    showMessage("error", "Informe o nome da lista");
                    return [2 /*return*/];
                }
                description = createListDescriptionInput.value;
                if (!description) {
                    showMessage("error", "Informe a descrição da lista");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createMediaList(name, description)];
            case 1:
                result = _a.sent();
                if (result.success)
                    showMessage("success", "Lista criada com sucesso, id = ".concat(result.list_id));
                if (result.list_id)
                    listId = result.list_id;
                createListNameInput.value = "";
                createListDescriptionInput.value = "";
                return [2 /*return*/];
        }
    });
}); });
addMediaToListButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var mediaId, listId, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                showMessage("success", "");
                mediaId = addMediaToListInputIdMedia.value;
                if (!mediaId) {
                    showMessage("error", "Informe o ID da mídia");
                    return [2 /*return*/];
                }
                listId = addMediaToListInputIdList.value;
                if (!listId) {
                    showMessage("error", "Informe o ID da lista");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, addMediaToList(mediaId, listId)];
            case 1:
                result = _a.sent();
                if (result.success)
                    showMessage("success", "Media adicionada na lista com sucesso");
                addMediaToListInputIdMedia.value = "";
                addMediaToListInputIdList.value = "";
                return [2 /*return*/];
        }
    });
}); });
function blockForms(disabled) {
    searchMediaByNameInput.disabled = disabled;
    searchMediaByNameButton.disabled = disabled;
    createListNameInput.disabled = disabled;
    createListDescriptionInput.disabled = disabled;
    createListButton.disabled = disabled;
    addMediaToListInputIdMedia.disabled = disabled;
    addMediaToListInputIdList.disabled = disabled;
    addMediaToListButton.disabled = disabled;
    searchMediaByListInput.disabled = disabled;
    searchMediaByListButton.disabled = disabled;
}
function blockLoginForm(disabled) {
    loginInput.disabled = disabled;
    passwordInput.disabled = disabled;
    apiKeyInput.disabled = disabled;
    loginButton.disabled = disabled;
    logoutButton.disabled = !disabled;
}
function clearForms() {
    loginInput.value = "";
    passwordInput.value = "";
    apiKeyInput.value = "";
    searchMediaByNameInput.value = "";
    createListNameInput.value = "";
    createListDescriptionInput.value = "";
    addMediaToListInputIdMedia.value = "";
    addMediaToListInputIdList.value = "";
    searchMediaByListInput.value = "";
    divList.innerHTML = "";
}
function showMessage(type, message) {
    messagesSpan.classList.add(type);
    messagesSpan.innerText = message;
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (_a) {
        var url = _a.url, method = _a.method, _b = _a.body, body = _b === void 0 ? {} : _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        var borySend = "";
                        request.open(method, url, true);
                        request.onload = function () {
                            if (request.status >= 200 && request.status < 300) {
                                resolve(JSON.parse(request.responseText));
                            }
                            else {
                                reject({
                                    status: request.status,
                                    responseText: request.responseText
                                });
                                showMessage("error", (JSON.parse(request.responseText)).status_message);
                            }
                        };
                        request.onerror = function () {
                            reject({
                                status: request.status,
                                statusText: request.statusText
                            });
                        };
                        if (body) {
                            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                            borySend = JSON.stringify(body);
                        }
                        request.send(borySend);
                    })];
            });
        });
    };
    return HttpClient;
}());
function createRequestToken() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(apiKey),
                        method: "GET"
                    })];
                case 1:
                    result = _a.sent();
                    if (result.success === false) {
                        if (result.status_message)
                            showMessage("error", result.status_message);
                        return [2 /*return*/];
                    }
                    requestToken = result.request_token;
                    return [2 /*return*/];
            }
        });
    });
}
function login() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=".concat(apiKey),
                        method: "POST",
                        body: {
                            username: "".concat(username),
                            password: "".concat(password),
                            request_token: "".concat(requestToken)
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createSession() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(apiKey, "&request_token=").concat(requestToken),
                        method: "GET"
                    })];
                case 1:
                    result = (_a.sent());
                    sessionId = result.session_id;
                    return [2 /*return*/];
            }
        });
    });
}
function searchMediaByMediaName(query, page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = encodeURI(query);
                    return [4 /*yield*/, HttpClient.get({
                            url: "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&query=").concat(query, "&page=").concat(page),
                            method: "GET"
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function searchMediaByListId(listId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list/".concat(listId, "?api_key=").concat(apiKey),
                        method: "GET"
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createList(medias) {
    return __awaiter(this, void 0, void 0, function () {
        var list, ul, _i, medias_1, media, li;
        return __generator(this, function (_a) {
            list = document.getElementById("list");
            if (list) {
                list.outerHTML = "";
            }
            ul = document.createElement("ul");
            ul.id = "list";
            for (_i = 0, medias_1 = medias; _i < medias_1.length; _i++) {
                media = medias_1[_i];
                li = document.createElement("li");
                li.appendChild(document.createTextNode("".concat(media.id, " - ").concat(media.original_title)));
                ul.appendChild(li);
            }
            divList.appendChild(ul);
            return [2 /*return*/];
        });
    });
}
function createListByMediaName(page) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    divList.innerHTML = "";
                    return [4 /*yield*/, searchMediaByMediaName(mediaName, page)];
                case 1:
                    result = _a.sent();
                    if (result.total_results === 0) {
                        showMessage("error", "N\u00E3o encontramos nenhum resultado para ".concat(mediaName));
                        return [2 /*return*/];
                    }
                    ;
                    createPaginate(result.page, result.total_pages);
                    createList(result.results);
                    return [2 /*return*/];
            }
        });
    });
}
function createListByListId() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    divList.innerHTML = "";
                    return [4 /*yield*/, searchMediaByListId(listId)];
                case 1:
                    result = _a.sent();
                    if (result.item_count === 0) {
                        showMessage("error", "N\u00E3o encontramos nenhum resultado para ".concat(listId));
                        return [2 /*return*/];
                    }
                    ;
                    createList(result.items);
                    return [2 /*return*/];
            }
        });
    });
}
function createPaginate(mediasPage, mediasTotalPage) {
    var _this = this;
    var divPaginate = document.createElement("div");
    var previuButton = document.createElement("button");
    var nextButton = document.createElement("button");
    var paginateText = document.createElement("p");
    var page = document.createElement("span");
    var separator = document.createElement("span");
    var totalPage = document.createElement("span");
    divPaginate.id = "paginate-buttons";
    previuButton.id = "previu-button";
    nextButton.id = "next-button";
    paginateText.id = "paginate-text";
    page.id = "number-page";
    separator.id = "separator-page";
    totalPage.id = "total-page";
    previuButton.innerText = "Anterior";
    nextButton.innerText = "Próximo";
    page.innerText = mediasPage;
    separator.innerText = "/";
    totalPage.innerText = mediasTotalPage;
    paginateText.appendChild(page);
    paginateText.appendChild(separator);
    paginateText.appendChild(totalPage);
    divPaginate.appendChild(previuButton);
    divPaginate.appendChild(paginateText);
    divPaginate.appendChild(nextButton);
    divList.appendChild(divPaginate);
    if (Number(mediasPage) < 2)
        previuButton.disabled = true;
    if (Number(mediasPage) >= Number(mediasTotalPage))
        nextButton.disabled = true;
    previuButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            page = String(Number(mediasPage) - 1);
            createListByMediaName(page);
            return [2 /*return*/];
        });
    }); });
    nextButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            page = String(Number(mediasPage) + 1);
            createListByMediaName(page);
            return [2 /*return*/];
        });
    }); });
}
function createMediaList(name, description) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list?api_key=".concat(apiKey, "&session_id=").concat(sessionId),
                        method: "POST",
                        body: {
                            name: name,
                            description: description,
                            language: "pt-br"
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addMediaToList(mediaId, listId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, HttpClient.get({
                        url: "https://api.themoviedb.org/3/list/".concat(listId, "/add_item?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
                        method: "POST",
                        body: {
                            media_id: mediaId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
