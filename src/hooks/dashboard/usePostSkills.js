import axios from "axios";
import { useCookies } from "react-cookie";

const headers = {
  "access-control-allow-origin": "https://api.projectszero.tech",
  // "connection": "keep-alive",
  // "content-length": 42,
  "content-type": "application/json",
  // "date": "Fri, 15 Sep 2023 04:35:35 GMT",
  "server": "nginx/1.18"
}


const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, {
        // skill: skills,
        "UIUX": skills.UIUX,
        "backend": skills.backend,
        "business analysis": skills["business analysis"],
        "design thinking": skills["design thinking"],
        "frontend": skills.frontend
        // thisIsDefinitelyWrong: true ${studentId}
      }, {
        headers: headers // 将 headers 传递给 axios 请求
      });
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      console.log(skills)
      alert(error+'   加油');
      // console.log(skills)
    }
  };
};

export default usePostSkills;
