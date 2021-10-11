import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { QuizProvider } from "./contexts/quiz";

// pages
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import Signup from "./pages/Signup";
import ButtonBack from "./pages/Beranda";

// pages detail
import Wemateri from "./detail-pages/Wemateri";
import WSAT from "./detail-pages/WSAT";
import Jadwal from "./detail-pages/Jadwal";
import Absensi from "./detail-pages/Absensi";
import UjianHariIni from "./detail-pages/UjianHariIni";
import WFresh from "./detail-pages/WFresh";

// pages detail again
import MateriSmp from "./detail-pages-again/MateriSmp";
import MateriSma from "./detail-pages-again/MateriSma";
import WeLesson from "./detail-pages-again/WeLesson";
import WeExam from "./detail-pages-again/WeExam";
import Ujian from "./detail-pages-again/Ujian";
import Game from "./detail-pages-again/Game";


//pages detail again2
import MapelKelas7 from "./detail-pages-again-2/MapelKelas7";
import MapelKelas8 from "./detail-pages-again-2/MapelKelas8";
import MapelKelas9 from "./detail-pages-again-2/MapelKelas9";
import MapelKelas10 from "./detail-pages-again-2/MapelKelas10";
import MapelKelas11 from "./detail-pages-again-2/MapelKelas11";
import MapelKelas12 from "./detail-pages-again-2/MapelKelas12";
import TPS from "./detail-pages-again-2/TPS";
import TPA from "./detail-pages-again-2/TPA";

//pages detail again3
import MateriBIndo7 from "./detail-pages-again-3/MateriBIndo7";
import MateriBIndo8 from "./detail-pages-again-3/MateriBIndo8";
import MateriBIndo9 from "./detail-pages-again-3/MateriBIndo9";
import MateriBIndo10 from "./detail-pages-again-3/MateriBIndo10";
import MateriBIndo11 from "./detail-pages-again-3/MateriBIndo11";
import MateriBIndo12 from "./detail-pages-again-3/MateriBIndo12";
import Quiz from "./detail-pages-again-3/Quiz";

//pages detail again4
import MateriPageBindo from "./detail-pages-again-4/MateriPageBindo";
import QuizBindo from "./detail-pages-again-4/QuizBindo";
import VideoMateriBindo from "./detail-pages-again-4/VideoMateriBindo";
import RangkumanBindo from "./detail-pages-again-4/RangkumanBindo";

// pages css
import "./css/style-login.css";

import questions from "./js/questions";

function App() {
  
  console.log(questions);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Beranda />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home/wemateri">
          <Wemateri />
        </Route>
        <Route exact path="/home/wemateri/materismp">
          <MateriSmp />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7">
          <MapelKelas7 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8">
          <MapelKelas8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9">
          <MapelKelas9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7">
          <MateriBIndo7 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/materipagebindo">
          <MateriPageBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/videomateribindo">
          <VideoMateriBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/rangkumanbindo">
          <RangkumanBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/quizbindo">
          <QuizBindo />
        </Route>
        <Route exact path="/home">
          <ButtonBack />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8">
          <MateriBIndo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9">
          <MateriBIndo9 />
        </Route>
        <Route exact path="/home/wemateri/materisma">
          <MateriSma />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10">
          <MapelKelas10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11">
          <MapelKelas11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12">
          <MapelKelas12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10">
          <MateriBIndo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11">
          <MateriBIndo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12">
          <MateriBIndo12 />
        </Route>
        <Route exact path="/home/wsat">
          <WSAT />
        </Route>
        <Route exact path="/home/wsat/welesson">
          <WeLesson />
        </Route>
        <Route exact path="/home/wsat/weexam">
          <WeExam />
        </Route>
        <Route exact path="/home/wsat/weexam/tps">
          <TPS />
        </Route>
        <Route exact path="/home/wsat/weexam/tps/tryouttps">
          <Quiz />
        </Route>
        <Route exact path="/home/wsat/weexam/tpa">
          <TPA />
        </Route>
        <Route exact path="/home/jadwal">
          <Jadwal />
        </Route>
        <Route exact path="/home/absensi">
          <Absensi />
        </Route>
        <Route exact path="/home/ujianhariini">
          <UjianHariIni />
        </Route>
        <Route exact path="/home/ujianhariini/ujian">
          <Ujian />
        </Route>
        <Route exact path="/home/wfresh">
          <WFresh />
        </Route>
        <Route exact path="/home/wfresh/game">
          <Game />
        </Route>
        
    <QuizProvider>
      <Quiz />
    </QuizProvider>
      </Switch>
      
    </Router>

    
  );
}
export default App;
