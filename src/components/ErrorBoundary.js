import { Component } from "react";
export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    componentDidCatch(error, errorInfo){
        console.log('Logging the error : ', error, errorInfo)
    }

    render(){
        if(this.state.hasError){
            return (
                <section className="section">
                    <h2>Ooops, something went wrong, please try refreshing</h2>
                </section>
                
            )
        }
        return this.props.children
    }
}