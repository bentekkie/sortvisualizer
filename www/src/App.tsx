import * as React from 'react'
import { Component } from 'react'
import FlipMove from 'react-flip-move';
import * as _ from "lodash";
import { Container, Row, Col, Progress, Button, Form, Label, Input } from 'reactstrap';
import { run_sort, delay, sorts } from './utils';
import FormGroup from 'reactstrap/lib/FormGroup';
import { Sorter } from './jsmodule';

interface IState {
    prevArray: number[],
    array: number[],
    swap: number[],
    sortType: sorts
    running: boolean,
    n: number,
    delay: number
}

export class App extends Component<{}, IState>{
    constructor(props: Readonly<{}>) {
        super(props)
        const array = shuffleArray([...range(1, 11)]);
        this.state = {
            array,
            prevArray: array,
            swap: [-1, -1],
            sortType: sorts.selection,
            running: false,
            n: 10,
            delay: 100
        }
    }

    sortList = () => {
        this.setState({ running: true }, async () => {
            for(const {array,swap} of run_sort(this.state.array, this.state.sortType)){
                if(!this.state.running) break;
                this.setState(prev => {prevArray:prev.array,array,swap})
                await delay(this.state.delay)
            }
            this.setState({running: false,swap:[-1,-1]})
        })
        
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    <Form>
                        <Row noGutters>
                            <Col xs={1} className="text-right">
                                <Button
                                    color="info"
                                    onClick={() => this.setState(({ n }) => ({ array: shuffleArray([...range(1, n + 1)]) }))}
                                    disabled={this.state.running}
                                >Shuffle</Button>
                            </Col>
                            <Col>
                                <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                    value={this.state.sortType}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ sortType: e.target.value as sorts })}
                                    disabled={this.state.running}
                                >
                                    {Object.keys(sorts).map(s => <option value={s}>
                                        {s}
                                    </option>)}
                                </Input>
                            </Col>
                            <Col xs={1}>
                                <Button
                                    color="success"
                                    onClick={() => {
                                        this.sortList();
                                    }}
                                    disabled={this.state.running}
                                >Sort</Button>
                            </Col>
                            <Col xs={1}>
                                <Button
                                    color="danger"
                                    onClick={() => this.setState({running:false})}
                                    disabled={!this.state.running}
                                >Stop</Button>
                            </Col>

                        </Row>
                        <Row noGutters>
                            <Col xs={1} className="text-right">
                                <Label for="nrange">Length:</Label>
                            </Col>
                            <Col>
                                <Input
                                    id="nrange"
                                    name="nrange"
                                    className="custom-range"
                                    type="range"
                                    max={100}
                                    min={1}
                                    step={1}
                                    value={this.state.n}
                                    disabled={this.state.running}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        let n = e.target.valueAsNumber
                                        this.setState({
                                            n,
                                            array: shuffleArray([...range(1, n + 1)])
                                        })
                                    }}
                                />
                            </Col>
                            <Col xs={1}>
                                <Input
                                    type="number"
                                    value={this.state.n}
                                    disabled={this.state.running}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        let n = e.target.valueAsNumber
                                        this.setState({
                                            n,
                                            array: shuffleArray([...range(1, n + 1)])
                                        })
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row noGutters>
                            <Col xs={1} className="text-right">
                                <Label for="ndelay">Delay:</Label>
                            </Col>
                            <Col>
                                <Input
                                    id="ndelay"
                                    name="ndelay"
                                    className="custom-range"
                                    type="range"
                                    max={1000}
                                    min={0}
                                    step={1}
                                    value={this.state.delay}
                                    disabled={this.state.running}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        let delay = e.target.valueAsNumber
                                        this.setState({ delay })
                                    }}
                                />
                            </Col>
                            <Col xs={1}>
                                <Input
                                    type="number"
                                    value={this.state.delay}
                                    disabled={this.state.running}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        let delay = e.target.valueAsNumber
                                        this.setState({ delay })
                                    }}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Row style={{ flexGrow: 1 }}>
                <Col>
                    {this.state.array.map((n, i, list) =>
                        <Row
                            key={n}
                            style={{ height: `${100 * 1.0 / list.length}%` }}
                        >
                            <Col>
                                <Progress
                                    style={{ height: `100%` }}
                                    color={(this.state.swap.indexOf(i) >= 0)?(_.isEqual(this.state.prevArray,this.state.array))?"success": "danger" : "info"}
                                    value={(100 * n * 1.0 / list.length)} />
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>

        </Container>
    }
}

function shuffleArray<T extends number>(arr: T[]) {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}
function* range(start: number, end: number): IterableIterator<number> {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
