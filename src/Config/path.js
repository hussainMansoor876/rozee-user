class Path {
    
    static BASE_URL = "https://rozee-server.herokuapp.com"

    // static BASE_URL = "http://localhost:3001"

    static GET_ALL_JOBS = Path.BASE_URL + "/job/getAllJobs"

    static APPLY_JOB = Path.BASE_URL + '/job/apply'

    static UPLOAD_CV = Path.BASE_URL + '/cv/upload'



}


export default Path