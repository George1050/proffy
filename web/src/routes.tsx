import React from "react";
import { Route, BrowserRouter} from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForms from "./pages/TeacherForms";

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForms} />

        </BrowserRouter>
    )
}

export default Routes;