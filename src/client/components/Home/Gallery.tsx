import * as React from 'react';
import config from '../../../server/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut } from '@fortawesome/free-solid-svg-icons';

export default class Gallery extends React.Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps) {
        super(props)
        this.state = {
            photos: []
        }
    }

    async componentDidMount() {
        try {
            let instagramUrl = buildUrl(config.options);
            let data = instafeed(config.options);
            console.log(data)

            this.setState({ photos: data })
        } catch (e) {
            console.log(e)
        }
    }

    returnPhotos() {
        return (
            this.state.photos.map((photo: any) => {
                return(
                    photo
                )
            })
        )
    }

    render() {
        return (
            <div className='gallery bg-primary mt-0 mb-0'>
                <div className='gallery-header text-center'>
                    <FontAwesomeIcon icon={faCut} size='lg' style={{ display: 'inline-block' }} className='text-secondary mr-2' />
                    <h1 className='text-secondary' style={{ display: 'inline-block' }}>Gallery</h1>
                    <FontAwesomeIcon icon={faCut} size='lg' style={{ display: 'inline-block' }} className='text-secondary ml-2' />
                    <hr className='bg-danger' />
                </div>
                <div id='instafeed'>
                    {this.returnPhotos()}
                </div>
            </div>
        )
    }
};

interface IGalleryProps { };
interface IGalleryState {
    photos: any
};