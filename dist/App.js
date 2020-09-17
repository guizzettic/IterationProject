var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// https://reacttraining.com/react-router/web/guides/quick-start
// import main containers for each page: login, profile, session page
import Login from './containers/Login.jsx';
import WaitingRoom from './containers/WaitingRoom.jsx';
import SessionRoom from './containers/SessionRoom.jsx';
// import './styles.scss';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "router" },
            React.createElement("main", null,
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: "/", component: Login }),
                    React.createElement(Route, { exact: true, path: "/waiting-room", component: WaitingRoom }),
                    React.createElement(Route, { exact: true, path: "/session-room", component: SessionRoom })))));
    };
    return App;
}(Component));
export default App;
//# sourceMappingURL=App.js.map