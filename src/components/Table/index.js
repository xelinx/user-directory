import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Row from "../Row";
import { users } from "../Users";

export default class Table extends React.Component {

    state = {
        sortType: "dsc",
        usersArray: users.results,
        key: "first",
        search: ""
    }
    onchange = e => {
        this.setState({ search: e.target.value });
    }

    iconStyle = {
        width: "30px",
        height: "30px"
    }

    changeSort = event => {
        this.setState({ key: event.target.name })
        if (this.state.sortType === "asc") {
            this.setState({ sortType: "dsc" })
        }
        else {
            this.setState({ sortType: "asc" })
        }
    }

    render() {
        const { usersArray, sortType, search } = this.state;

        const Users = usersArray.filter(user => {
            return user.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })

        const sortedArray = Users.sort((a, b) => {
            const isReversed = (sortType === "asc") ? 1 : -1;
            return isReversed * a.name.last.localeCompare(b.name.last)
        }
        )

        return (
            <>
                <input type="text" placeholder="Search First name" onChange={this.onchange}></input>
                <ReactBootstrap.Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>First Name <button type="button" class="btn" onClick={this.changeSort}>Sort</button></th>
                            <th>Last Name <button type="button" class="btn" onClick={this.changeSort}>Sort</button></th>
                            <th>Phone Number <button type="button" class="btn" onClick={this.changeSort}>Sort</button></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedArray.map(user =>
                            <Row user={user} />
                        )}
                    </tbody>
                </ReactBootstrap.Table>
            </>
        );
    }
}
