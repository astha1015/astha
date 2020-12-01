import React from 'react'

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email:'',
            description:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit(event){
        const templateId = 'template_6399y6f';
        const serviceId = 'service_nmv385j';
        this.sendFeedback(serviceId, templateId, {message: this.state.description, from_name: this.state.name, from_email: this.state.email});
        event.preventDefault();
        this.setState({
            name: '',
            email:'',
            description:'',
        });
    }
    
    sendFeedback(serviceId, templateId, variables){
        window.emailjs.send(
            serviceId, templateId, variables
        ).then(res => {
            alert('Email sent successfully!')
        })
        .catch(err => alert('Oop, something went wrong:', err))
    }
    render(){
        return (
            <form className="w-full max-w-lg container mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Full Name
                            </label>
                            <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" name="name" type="text "/>
                            
                        
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input onChange={this.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea onChange={this.handleChange} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="description" id="message"></textarea>
                        
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <button onClick={this.handleSubmit} className="shadow bg-blue-500 hover:bg-beal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
            </form>
        )
    }
} 


