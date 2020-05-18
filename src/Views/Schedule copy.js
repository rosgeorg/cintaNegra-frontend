import React, { Component } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from 'classnames';
import '../Assets/CSS/Schedule.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row, Col,
} from 'reactstrap';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa/';
import { TiPencil } from 'react-icons/ti'


const Schedule = () => (
    <WeekSchedule />
)

export default Schedule;


class WeekSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [
                // {
                //     date: new Date(2018, 4, 22),
                //     matches: [
                //         { home: "santos", away: "real garcilaso", homeScore: 0, awayScore: 0 },
                //         { home: "atletico nacional", away: "colo colo", homeScore: 0, awayScore: 0 },
                //         { home: "corinthians", away: "millonarios", homeScore: 0, awayScore: 1 },
                //         { home: "independiente", away: "deportivolara", homeScore: 2, awayScore: 0 },
                //     ]
                // },
                // {
                //     date: new Date(2018, 4, 21),
                //     matches: [
                //         { home: "toronto fc", away: "fc dallas", homeScore: 0, awayScore: 2 },
                //         { home: "houston dynamo", away: "new york city fc", homeScore: 2, awayScore: 1 },
                //         { home: "portland thorns fc", away: "utah royals fc", homeScore: 2, awayScore: 1 },
                //         { home: "los angeles galaxy", away: "san joes earthquakes", homeScore: 0, awayScore: 0 },
                //     ]
                // },
                // {
                //     date: new Date(2018, 5, 4),
                //     matches: [
                //         { home: "thailand", away: "china pr", homeScore: 0, awayScore: 1 },
                //         { home: "austria", away: "germany", homeScore: 3, awayScore: 1 },
                //         { home: "england", away: "nigeria", homeScore: 1, awayScore: 0 },
                //         { home: "sweden", away: "denmark", homeScore: 0, awayScore: 0 },
                //     ]
                // },
                // {
                //     date: new Date(2018, 4, 28),
                //     matches: [
                //         { home: "brazil", away: "croatia", homeScore: 2, awayScore: 0 },
                //         { home: "costa rica", away: "northern ireland", homeScore: 3, awayScore: 0 },
                //         { home: "saudi arabia", away: "peru", homeScore: 0, awayScore: 3 },
                //         { home: "bahia", away: "gremio", homeScore: 0, awayScore: 1 },
                //     ]
                // },
            ],

            activeTab: "Monday",
            dateFilter: "",
        };
    }

    handle_addSchedule(childForm) {

        const newMatch = {
            home: childForm.home,
            away: childForm.away,
            homeScore: childForm.homeScore,
            awayScore: childForm.awayScore,
        };

        const findDate_index = this.state.schedule.findIndex(x => dateToString(x.date) === childForm.date);

        //add to existing schedule
        if (findDate_index >= 0) {

            this.setState(prevState => {
                let newSchedule = [...prevState.schedule];
                newSchedule[findDate_index].matches.push(newMatch);

                return { Schedule: newSchedule }
            });
        }
        //create new schedule
        else {
            const newSchedule =
                {
                    date: stringToDate(childForm.date),
                    matches: [
                        newMatch,
                    ]
                };

            this.setState(prevState => {

                return {
                    schedule: [...prevState.schedule].concat(newSchedule),
                }
            });
        }

    }

    handle_deleteSchedule(index, date) {
        this.setState(prevState => {
            let newSchedule = [...prevState.schedule];
            const findDate_index = newSchedule.findIndex(x => x.date === date);
            newSchedule[findDate_index].matches.splice(index, 1);

            return { Schedule: newSchedule }
        })
    }

    handle_deleteAll(date) {
        this.setState(prevState => {
            return { schedule: [...prevState.schedule.filter(x => x.date !== date)] }
        })
    }

    handle_updateSchedule(formData, date) {
        this.setState(prevState => {
            let newSchedule = [...prevState.schedule];
            const findDate_index = newSchedule.findIndex(x => x.date === date);
            newSchedule[findDate_index].matches[formData.matchIndex] = {
                home: formData.home,
                away: formData.away,
                homeScore: formData.homeScore,
                awayScore: formData.awayScore,
            };

            return { Schedule: newSchedule }
        })
    }

    render() {

        const MondaySchedule = this.state.schedule.filter(x => x.date.getDay() === 1);
        const TuesdaySchedule = this.state.schedule.filter(x => x.date.getDay() === 2);
        const WednesdaySchedule = this.state.schedule.filter(x => x.date.getDay() === 3);
        const ThursdaySchedule = this.state.schedule.filter(x => x.date.getDay() === 4);
        const FridaySchedule = this.state.schedule.filter(x => x.date.getDay() === 5);
        const SaturdaySchedule = this.state.schedule.filter(x => x.date.getDay() === 6);
        const SundaySchedule = this.state.schedule.filter(x => x.date.getDay() === 7);

        const MondayTabColor = (this.state.activeTab === "Monday") ? "antiquewhite" : "lightblue";
        const TuesdayTabColor = (this.state.activeTab === "Tuesday") ? "antiquewhite" : "lightblue";
        const WednesdayTabColor = (this.state.activeTab === "Wednesday") ? "antiquewhite" : "lightblue";
        const ThursdayTabColor = (this.state.activeTab === "Thursday") ? "antiquewhite" : "lightblue";
        const FridayTabColor = (this.state.activeTab === "Friday") ? "antiquewhite" : "lightblue";
        const SaturdayTabColor = (this.state.activeTab === "Saturday") ? "antiquewhite" : "lightblue";
        const SundayTabColor = (this.state.activeTab === "Sunday") ? "antiquewhite" : "lightblue";
        const DataViewColor = (this.state.activeTab === "DataView") ? "antiquewhite" : "lightblue";

        return (
            <div>
                {/* ------------tabs------------------- */}
                <Nav className="sm-auto my-tab-color" tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Monday" })}
                            style={{ backgroundColor: MondayTabColor }}
                            onClick={() => this.setState({ activeTab: "Monday" })}>
                            Monday
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Tuesday" })}
                            style={{ backgroundColor: TuesdayTabColor }}
                            onClick={() => this.setState({ activeTab: "Tuesday" })}>
                            Tuesday
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Wednesday" })}
                            style={{ backgroundColor: WednesdayTabColor }}
                            onClick={() => this.setState({ activeTab: "Wednesday" })}>
                            Wednesday
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Thursday" })}
                            style={{ backgroundColor: ThursdayTabColor }}
                            onClick={() => this.setState({ activeTab: "Thursday" })}>
                            Thursday
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Friday" })}
                            style={{ backgroundColor: FridayTabColor }}
                            onClick={() => this.setState({ activeTab: "Friday" })}>
                            Friday
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Saturday" })}
                            style={{ backgroundColor: SaturdayTabColor }}
                            onClick={() => this.setState({ activeTab: "Saturday" })}>
                            Saturday
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "Sunday" })}
                            style={{ backgroundColor: SundayTabColor }}
                            onClick={() => this.setState({ activeTab: "Sunday" })}>
                            Sunday
                            </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto">
                        <NavLink>
                            <input className="my-input-width" onChange={(e) => this.setState({ dateFilter: e.target.value })}
                                placeholder="date filter" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === "DataView" })}
                            style={{ backgroundColor: DataViewColor }}
                            onClick={() => this.setState({ activeTab: "DataView" })}>
                            Data View
                            </NavLink>
                    </NavItem>
                </Nav>

                {/* ------------table------------------- */}
                <TabContent activeTab={this.state.activeTab} className="my-tab-content-color">
                    <TabPane tabId="Monday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={MondaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Tuesday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={TuesdaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Wednesday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={WednesdaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Thursday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={ThursdaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Friday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={FridaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Saturday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={SaturdaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="Sunday">
                        <Row>
                            <Col sm="12">
                                <WeekdayTable weekdaySchedule={SundaySchedule}
                                    delete_callback={(index, date) => this.handle_deleteSchedule(index, date)}
                                    deleteAll_callback={(date) => this.handle_deleteAll(date)}
                                    update_callback={(formData, date) => this.handle_updateSchedule(formData, date)}
                                    dateFilter={this.state.dateFilter} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="DataView">
                        <Row>
                            <Col sm="12">
                                <h4>Data View</h4>
                                {DataView_func(this.state)}
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

                {/* ------------add------------------- */}
                <div className="my-schedule-form">
                    <AddForm addSchedule_callback={(data) => this.handle_addSchedule(data)} />
                </div>

            </div>
        );
    }
}

class WeekdayTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reverseDate: false,
            editCollapse: [],
        };
    }

    handle_reverseDate() {
        this.setState(prevState => { return { reverseDate: !prevState.reverseDate } })
    }

    handle_editCollapse(index) {
        this.setState(prevState => {
            let newEditCollapse = [...prevState.editCollapse];
            if (newEditCollapse[index] === null) { newEditCollapse[index] = false; }
            else { newEditCollapse[index] = !newEditCollapse[index]; }
            return { editCollapse: newEditCollapse }
        })
    }

    render() {

        const weekdayScheduleSorted_all_func = (weekdaySchedule) => {
            const scheduleLength = weekdaySchedule.length;
            if (scheduleLength === 0) { return (<div></div>) }

            let tables = [];
            weekdaySchedule = (this.state.reverseDate ?
                scheduleSort([...weekdaySchedule]) :
                scheduleSort([...weekdaySchedule]).reverse()).
                filter(x => x.date.toDateString().includes(this.props.dateFilter));

            weekdaySchedule.
                map((item, index) => {

                    tables[index] = (< div key={index}>

                        <h4>
                            <span onClick={() => this.handle_reverseDate()}  >
                                {item.date.toDateString()}
                                {!this.state.reverseDate ? <FaAngleUp /> : <FaAngleDown />}
                            </span>
                            <span className="my-tab-right" >
                                <TiPencil onClick={() => this.handle_editCollapse(index)} />
                            </span>
                        </h4>

                        <OneTable schedule={item} edit={this.state.editCollapse[index]} />

                        <Collapse isOpen={this.state.editCollapse[index]}>
                            {/* ------------update------------------- */}
                            <UpdateForm currentSchedule={item}
                                updateSchedule_callback={(formData) => {
                                    this.props.update_callback(formData, item.date)
                                }} />

                            {/* ------------delete------------------- */}
                            <DeleteForm currentSchedule={item}
                                deleteSchedule_callback={(deleteIndex) => {
                                    this.props.delete_callback(deleteIndex, item.date)
                                }}
                                deleteAllSchedule_callback={() => {
                                    this.setState(prevState => {
                                        let newEditCollapse = [...prevState.editCollapse];
                                        newEditCollapse.splice(index, 1);
                                        return {
                                            editCollapse: newEditCollapse
                                        }
                                    });
                                    this.props.deleteAll_callback(item.date);
                                }} />
                        </Collapse>
                    </div >);

                }
                );

            return tables;
        }

        const allTables = weekdayScheduleSorted_all_func(this.props.weekdaySchedule);

        return allTables;
    }
}

class OneTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortItem: "",
            reverseSort: false,
            home_input: "",
            away_input: "",
        };
    }

    handleTH_click(category) {

        this.setState(prevState => {
            return {
                sortItem: category,
                reverseSort: category === prevState.sortItem ? !prevState.reverseSort : prevState.reverseSort,
            }
        });

    }

    handleTH_input(e) {
        switch (e.target.name) {
            case "home":
                this.setState({ home_input: e.target.value, })
                break;
            case "away":
                this.setState({ away_input: e.target.value, })
                break;
            default:
                break;
        }
    }

    render() {

        switch (this.state.sortItem) {
            case "home_team":
                this.props.schedule.matches = [...this.props.schedule.matches].
                    sort((a, b) => {
                        return !this.state.reverseSort ?
                            a.home.localeCompare(b.home) : b.home.localeCompare(a.home)
                    });
                break;
            case "home_score":
                this.props.schedule.matches = [...this.props.schedule.matches].
                    sort((a, b) => {
                        return !this.state.reverseSort ?
                            a.homeScore - b.homeScore : b.homeScore - a.homeScore
                    });
                break;
            case "away_team":
                this.props.schedule.matches = [...this.props.schedule.matches].
                    sort((a, b) => {
                        return !this.state.reverseSort ?
                            a.away.localeCompare(b.away) : b.away.localeCompare(a.away)
                    });
                break;
            case "away_score":
                this.props.schedule.matches = [...this.props.schedule.matches].
                    sort((a, b) => {
                        return !this.state.reverseSort ?
                            a.awayScore - b.awayScore : b.awayScore - a.awayScore
                    });
                break;
            default:
                break;
        }

        const tableContent = this.props.schedule.matches
            .filter(x =>
                x.home.includes(this.state.home_input) &&
                x.away.includes(this.state.away_input))
            .map((item, index) =>

                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td >{item.home}</td>
                    <td >{item.homeScore}</td>
                    <td >VS</td>
                    <td >{item.awayScore}</td>
                    <td >{item.away}</td>
                </tr>
            );

        return (
            < div>

                <Table responsive hover striped size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>
                                <span onClick={() => this.handleTH_click("home_team")}>
                                    Home Team
                                    {!this.state.reverseSort && this.state.sortItem === "home_team" ? <FaAngleUp /> : <FaAngleDown />}
                                </span>
                                <input className="my-input-width" name="home" onChange={(e) => this.handleTH_input(e)} />
                            </th>
                            <th onClick={() => this.handleTH_click("home_score")}>
                                Home Score
                                    {!this.state.reverseSort && this.state.sortItem === "home_score" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th>VS</th>
                            <th onClick={() => this.handleTH_click("away_score")}>
                                Away Score
                                     {!this.state.reverseSort && this.state.sortItem === "away_score" ? <FaAngleUp /> : <FaAngleDown />}
                            </th>
                            <th>
                                <span onClick={() => this.handleTH_click("away_team")}>
                                    Away Team
                                    {!this.state.reverseSort && this.state.sortItem === "away_team" ? <FaAngleUp /> : <FaAngleDown />}
                                </span>
                                <input className="my-input-width" name="away" onChange={(e) => this.handleTH_input(e)} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </Table >

            </div >
        );
    }
}

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            home: "",
            away: "",
            homeScore: 0,
            awayScore: 0,
            status: "",
        };
    }

    handle_submit(e) {

        if (this.state.home === "" || this.state.away === "" || this.state.date === "") {
            return false;
        }
        else {
            const formData = {
                date: this.state.date,
                home: this.state.home,
                away: this.state.away,
                homeScore: this.state.homeScore,
                awayScore: this.state.awayScore,
            };

            this.props.addSchedule_callback(formData);
        }

        e.preventDefault();

        const messageStatus = "successfully added to " + stringToDate(this.state.date).toDateString();
        this.setState({ status: messageStatus });
    }
    render() {
        return (
            <div>
                <h4>Add Schedule <span className="my-status">{this.state.status}</span></h4>
                <Form inline onSubmit={(e) => this.handle_submit(e)}>
                    <FormGroup >
                        <Input type="date" bsSize="sm" name="matchDate" placeholder="Match Date" required="required"
                            onChange={(e) => this.setState({ date: e.target.value })} />
                    </FormGroup>
                    <FormGroup >
                        <Input bsSize="sm" placeholder="Home Team" required="required"
                            onChange={(e) => this.setState({ home: e.target.value })} />
                    </FormGroup>
                    <FormGroup >
                        <Input bsSize="sm" placeholder="Away Team" required="required"
                            onChange={(e) => this.setState({ away: e.target.value })} />
                    </FormGroup>
                    <FormGroup >
                        <Input type="number" bsSize="sm" placeholder="Home Score"
                            onChange={(e) => this.setState({ homeScore: e.target.value })} />
                    </FormGroup>
                    <FormGroup >
                        <Input type="number" bsSize="sm" placeholder="Away Score"
                            onChange={(e) => this.setState({ awayScore: e.target.value })} />
                    </FormGroup>

                    <Button size="sm" type="submit" onClick={() => this.setState({ status: "" })}> Submit</Button>
                </Form>
            </div>
        );
    }
}

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: "home team",
            away: "away team",
            homeScore: 0,
            awayScore: 0,
            matchIndex: 0,
            disable_input: true,
            tooltip_homeScore: true,
            tooltip_awayScore: false,
        };
    }

    handle_selectChange(e) {
        const selectedOption = parseInt(e.target.value) - 1;
        const originMatch = this.props.currentSchedule.matches[selectedOption];
        this.setState({
            home: originMatch.home,
            away: originMatch.away,
            homeScore: originMatch.homeScore,
            awayScore: originMatch.awayScore,
            matchIndex: selectedOption,
            disable_input: false,
        });
    }

    handle_submit(e) {

        if (this.state.home === "" || this.state.away === "") {
            return false;
        }
        else {
            const formData = {
                home: this.state.home,
                away: this.state.away,
                homeScore: this.state.homeScore,
                awayScore: this.state.awayScore,
                matchIndex: this.state.matchIndex,
            };

            this.props.updateSchedule_callback(formData);
        }

        e.preventDefault();

    }

    toggle_homeScoreTooltip() {
        this.setState(prevState => { return { tooltip_homeScore: !prevState.tooltip_homeScore } })
    }

    render() {
        const updateOptions = this.props.currentSchedule.matches.
            map((item, index) =>
                <option key={index}>{index + 1} </option>
            )

        updateOptions.unshift(<option key={-1} disabled={!this.state.disable_input}>
            select me</option>);

        return (
            <div className="my-schedule-form-update">
                <h4>Update Schedule</h4>
                <Form inline onSubmit={(e) => this.handle_submit(e)}>
                    <FormGroup >
                        <Input type="select" bsSize="sm" id="update_matchNum"
                            onChange={(e) => this.handle_selectChange(e)}>
                            {updateOptions}</Input>
                    </FormGroup>
                    <FormGroup >
                        <Input bsSize="sm" placeholder={this.state.home}
                            onChange={(e) => e.target.value !== "" ? this.setState({ home: e.target.value }) : null}
                            disabled={this.state.disable_input} />
                    </FormGroup>
                    <FormGroup >
                        <Input bsSize="sm" placeholder={this.state.away}
                            onChange={(e) => e.target.value !== "" ? this.setState({ away: e.target.value }) : null}
                            disabled={this.state.disable_input} />
                    </FormGroup>
                    <FormGroup >
                        <span id="update_homeScore">
                            <span className="my-tooltip">home score</span>
                            <Input type="number" bsSize="sm" placeholder={this.state.homeScore}
                                onChange={(e) => e.target.value !== "" ? this.setState({ homeScore: e.target.value }) : null}
                                disabled={this.state.disable_input} />
                        </span>
                    </FormGroup>
                    <FormGroup >
                        <span id="update_awayScore">
                            <span className="my-tooltip">away score</span>
                            <Input type="number" bsSize="sm" placeholder={this.state.awayScore}
                                onChange={(e) => e.target.value !== "" ? this.setState({ awayScore: e.target.value }) : null}
                                disabled={this.state.disable_input} />
                        </span>
                    </FormGroup>

                    <Button size="sm" type="submit" disabled={this.state.disable_input}
                        onClick={() => this.setState({ status: "" })}> Submit</Button>
                </Form>
            </div>
        );
    }
}

class DeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 0,
        };
    }

    handle_inputChange(e) {
        this.setState({
            selectedOption: parseInt(e.target.value.split(' ')[0].slice(1)) - 1,
        });
    }

    render() {
        const deleteOptions = this.props.currentSchedule.matches.
            map((item, index) =>
                <option key={index}>#{index + 1} {item.home} vs {item.away}</option>
            )

        return (
            <div className="my-schedule-form-delete">
                <h4>Delete Schedule</h4>
                <Row>
                    <Col xs="3">
                        <Label for="deleteInput">Delete selected</Label>
                    </Col>
                    <Col xs="5">
                        <Input type="select" bsSize="sm" id="deleteInput"
                            onChange={(e) => this.handle_inputChange(e)}>
                            {deleteOptions}</Input>
                    </Col>
                    <Col xs="2">
                        <Button size="sm" onClick={() => this.props.deleteSchedule_callback(this.state.selectedOption)}>
                            Delete single</Button>
                    </Col>
                    <Col xs="2">
                        <Button size="sm" onClick={() => this.props.deleteAllSchedule_callback()}>
                            Delete all</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const dateToString = (date) => {
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1;
    const month0 = month < 10 ? '0' + month.toString() : month.toString();
    const day = date.getDate();
    const day0 = day < 10 ? '0' + day.toString() : day.toString();
    const newDate = year + '-' + month0 + '-' + day0;
    return newDate;
};

const stringToDate = (input_string) => {
    const year_month_day = input_string.split('-');
    const year = parseInt(year_month_day[0]);
    const month = parseInt(year_month_day[1]) - 1;
    const day = parseInt(year_month_day[2]);
    return new Date(year, month, day);
}

const scheduleSort = (array_unsorted) => {
    let array_sorted = [];

    const findLatest_func = (array_unsorted) => {

        let lastestDate = array_unsorted[0].date;
        let latestIndex = 0;

        array_unsorted.map((item, index) => {
            if (item.date > lastestDate) {
                lastestDate = item.date;
                latestIndex = index;
            }
        });

        return latestIndex;
    }

    while (array_unsorted.length > 0) {
        const findLatestDateIndex = findLatest_func(array_unsorted);
        array_sorted.push(array_unsorted[findLatestDateIndex]);
        array_unsorted.splice(findLatestDateIndex, 1);
    }

    return array_sorted;
}

const DataView_func = (data) => {
    let schedules = [];
    const scheduleView = data.schedule.map((item, index) => {
        let matches = [];
        const matchView = data.schedule[index].matches.map((item2, index2) => {
            const singleMatch = (<div key={index2}>
                {"{"}
                home: {item2.home}, away: {item2.away},
                home score: {item2.homeScore}, away score: {item2.awayScore}
                {"}, "}
            </div>);

            matches.push(singleMatch);
        });

        const singleSchedule = (<div key={index}>
            date: {item.date.toDateString()}<br />
            matches: {matches}<br />
        </div>);

        schedules.push(singleSchedule);
    })
    return (<div>{schedules}</div>)
}