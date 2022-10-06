import Banner from "../components/Banner/Banner";
import Courses from "../components/Courses/Courses";
import Slider from "../components/Slider/Slider";

function Home() {
    return(
        <>
            <Banner />
            <Slider catName={"C#"} /> 
            <Courses courseName={"C#"} />
        </>
    )
}

export default Home;