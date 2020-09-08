import React, {  useState } from 'react'
import '../App.css';
import { Layout} from 'antd'
import Axios from 'axios'
import UserCard from './UserCard'

import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
  } from "reactstrap";
  

import 'bootstrap/dist/css/bootstrap.min.css';

const { Header,  Content } = Layout;

const Myapp = () => {
    const [query,setQuery] = useState("")
    const [list, setList] = useState([])

    const fetchDetails = async () => {
        try {
          const { data } = await Axios.get(`https://api.github.com/users/${query}`);
          //setUser(data);
          const temp = list
          temp.push(data);
          setList(temp.reverse())
          setQuery("")
          console.log({list});
        } catch (eror) {
         console.log(eror.message);
        }
      
      };


    return(
        <Layout>
            <Header>
            <Container>
                <Row className=" mt-3">
                    <Col md="7">
                    <InputGroup>
                        <Input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Please provide the username"
                        />
                        <InputGroupAddon addonType="append">
                        <Button  
                        onClick={fetchDetails}
                        color="primary">
                            Fetch User
                        </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>
            </Header>
            <Content  >
                {
                list.map((user) => (
                
                    <ul key={ user.id }>
                    {
                    <UserCard user={user}/>
                    }
                    </ul>
                
                ))
            }
            </Content>
         </Layout>
    );
}

export default Myapp;