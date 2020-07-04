import React, { Component ,Fragment} from 'react';
import axois from "axios"; 
import "./COMPONENT/Spinner";
import Spinner from './COMPONENT/Spinner';
class App extends Component{
    constructor (props){
        super(props);
        this.state={
            items:[],
            loading:false
        };
    }

    async componentDidMount(){
        //window.fetch is only for frontend
        //axios is working with frontend and backend node js https request get post dellete,header
        //let response =await window.fetch("https://api.github.com/users");
        //console.log(response);
      // let json=await response.json();
       //console.log(json)


       let axiosResponse=await axois.get("https://api.github.com/users");
      // console.log(axiosResponse);
      this.setState({items:axiosResponse.data,loading:true});
    }
    
    render(){
        //useing loop method 
        let {loading,items}=this.state;
        //loop
        let GitUser=items.map((user)=>{
            return(
                <Fragment key={user.id}>
                    <div className="card">
                        <img className="card-img-top" 
                        src={user.avatar_url} 
                        alt={user.name}/>
                        <div className="card-body">
                            <h4 className="display-5 font weight-bold">{user.login}</h4>
                        </div>
                    </div>
                </Fragment>
            );
        });

    
        return(
            <Fragment>
                {loading?
                (
                 <section className="container my-4 d-flex flex-wrap justify-content-between">
                     {GitUser}
                     </section>   
                ):(
                    <Spinner/>
                )}
            </Fragment>
        );

    }
}
export default App;