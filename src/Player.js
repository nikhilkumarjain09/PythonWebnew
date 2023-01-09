import React, { Component } from 'react';
import {useState,useRef,useEffect} from 'react';
import 'video-react/dist/video-react.css'
import { Link, useParams } from 'react-router-dom';
import Player from './Player';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import ReactPlayer from 'react-player';
function PlayerToShow(){
    const params = useParams();
    const videoref = useRef();
    const [data,getDATAFROMJSON] = useState({});
    const fetchKey = async () => {
        const response = await fetch(`http://192.168.31.174:3000/video/${params.id}/data`);
        const datafromjson = await response.json();
        // console.log(data[0])
        getDATAFROMJSON(datafromjson)
    }
    console.log(params.id)
    console.log(data.name)
        useEffect(()=>{
            fetchKey();
        },[]);

        // console.log(videos.id)
        return (
           <>
            <section>
            <div>
            <Video controls muted autoPlay
            width="100%"
            height="100%">
                        <source src={`http://192.168.31.174:3000/video/${params.id}`} type="video/mp4"></source>
                        
                    </Video>
            <p>{data.name}</p>
            </div>
            </section>
           </>
        )



    }
    
    export default PlayerToShow;
    