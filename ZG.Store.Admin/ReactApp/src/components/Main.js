import React from 'react';
import { Route } from 'react-router';
import Header from './Header';

import { Grid, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            {React.cloneElement(this.props.children, this.props)} {/* pass props of Main to the cloned children */}
                        </Col>                        
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Main;