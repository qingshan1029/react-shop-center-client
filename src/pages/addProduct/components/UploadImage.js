import React, { Component } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import WakeUp from './WakeUp'
import Footer from './footer'

const toastColor = {
    background: '#505050',
    text: '#fff'
}

export default class UploadImage extends Component {

    state = {
        loading: true,
        uploading: false,
        images: [],
        formData : new FormData()
    }

    componentDidMount() {
        this.setState({ loading: false })
    // fetch(`${API_URL}/wake-up`)
    //     .then(res => {
    //         if (res.ok) {
    //             return this.setState({ loading: false })
    //         }
    //         const msg = 'Something is went wrong with Heroku'
    //         this.toast(msg, 'custom', 2000, toastColor)
    //     })
    }

    toast = notify.createShowQueue()
    onChange = e => {
        const errs = []
        const files = Array.from(e.target.files)

        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            return this.toast(msg, 'custom', 2000, toastColor)
        }

        // const formData1 = new FormData()
        const types = ['image/png', 'image/jpeg', 'image/gif']
        console.log(files)
        files.forEach((file, i) => {

            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
            }

            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
            }

            this.state.formData.append(i.toString(), file)
            console.log(this.state.formData)
            console.log(i.toString())
            console.log(file)
        })

        // this.setState(
        //     this.state.formData = formData1
        // )

        const {getFormData} = this.props
        getFormData(this.state.formData)
    }

    render() {
        const { loading, uploading, images } = this.state

        // const content = () => {
        //     switch(true) {
        //         case loading:
        //             return <WakeUp />
        //         case uploading:
        //             return <Spinner />
        //         case images.length > 0:
        //             return <Images
        //                 images={images}
        //                 removeImage={this.removeImage}
        //                 onError={this.onError}
        //             />
        //         default:
        //             return <Buttons onChange={this.onChange} />
        //     }
        // }

        return (
            <div className='container'>
                {/*<Notifications />*/}
                <div className='buttons'>
                    {/*{content()}*/}
                    <Buttons onChange={this.onChange} />
                </div>
                {/*<Footer />*/}
            </div>
        )
    }
}
