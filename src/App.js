import React, { useState, useEffect } from 'react'
import SingleVideo from "./Components/SingleVideo/SingleVideo";
import VideoList from "./Components/VideoList/VideoList";
import { Row, Col, Input, Button } from 'antd';
import YouTube from 'simple-youtube-api'
import 'antd/dist/antd.css';
const youtube = new YouTube('AIzaSyBan8u-be3yuIGlvo7yJhAxomx1pmutKcM');

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideoList, setSelectedVideoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [passTochild, setPassTochild] = useState("basketball");



  useEffect(() => {
    const callApi = async () => {

      const response = await youtube.searchVideos(passTochild, 5);
      setSelectedVideoList(response[0]);
      setVideoList(response)
    }
    callApi();
  }, [passTochild]);

  const selectedVideoCallBack = (videoDetail) => {
    setSelectedVideoList(videoDetail);
  }

  return (

    <>
      <Row style={{ padding: '20px' }}>
        <Col span={21}><Input onChange={event => setSearchTerm(event.target.value)} size="large" placeholder="Search video here..." /></Col>
        <Col span={3}><Button onClick={() => setPassTochild(searchTerm)} type="primary" size="large">Search</Button></Col>
      </Row>
      <Row>
        <Col span={12}><SingleVideo video={selectedVideoList} /></Col>
        <Col span={12}><VideoList videos={videoList} changeSelection={selectedVideoCallBack} /></Col>
      </Row>
    </>
  );
}

export default App;
