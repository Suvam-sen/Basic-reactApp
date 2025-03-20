import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.time = setInterval(()=> {
            console.log("Component is clicked")
        }, 1000)
    }

    /*
    in functional based component we have another return function inside useEffect

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    */


    componentWillUnmount() {
        clearInterval(this.time)
    }
    render(){
        return (
            <div>
                <p>Name: {this.props.name}</p>
            </div>
        )
    }
}

export default UserClass