import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner/Banner";
import Courses from "../components/Courses/Courses";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import { getCoursesAction } from "../redux/actions/CourseActions";
import { getCourseCategoryActions } from "../redux/actions/CourseCategoryActions";

function Home() {

    const {category} = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCourseCategoryActions())
    },[])

    return(
        <>
          <Header />
            <Banner coverPhoto={"https://comparassetsource.s3.amazonaws.com/media/blog/article/pexels-thisisengineering-3861951.jpg"} title={"Education Courses"} subTitle={"Learn From Home"} searchInput={true} />
            {
                category.map((cat,index) =>(
                    <Courses key={index} catId={cat.id} courseName={cat.name} />
                ))
            }
        </>
    )
}

export default Home;