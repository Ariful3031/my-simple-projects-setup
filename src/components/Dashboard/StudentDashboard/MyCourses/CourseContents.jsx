import { useParams } from "react-router-dom";
import CourseAccordion from "./CourseAccordion";
import { useGetMySingleCourseQuery } from "../../../../redux/api/EnrolledCourseApi";
import useCurrentUser from "../../../hooks/useCurrentUser";
import Loading from "../../../pages/Loading/Loading";

export default function CourseContents() {
    const { id } = useParams(); // router param এর নাম অনুযায়ী
    const user = useCurrentUser();
    const email = user?.email
    const { data, isLoading } = useGetMySingleCourseQuery({ id, email })
    const contentsData = data?.topics;

    
   if (isLoading) {
        return <p>loading............</p>;
    }
    return (
        <div className="p-5 space-y-4">
            <h1 className="text-xl font-semibold text-center underline underline-offset-8 my-5">
                কোর্সের বিষয়বস্তু
            </h1>

            {contentsData && contentsData?.length > 0 ? (
                <CourseAccordion contentsData={contentsData} />
            ) : (
                <p className="text-center text-gray-500 mt-10">কোনো মডিউল পাওয়া যায়নি।</p>
            )}
        </div>
    );
}