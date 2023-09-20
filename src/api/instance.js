export const baseUrl = process.env.REACT_APP_API_URL;

const fetchInstance = async (url, requestConfig) => {
  // try {
  const response = await fetch(baseUrl + url, {
    method: requestConfig.method ? requestConfig.method : "GET",
    headers: requestConfig.headers ? requestConfig.headers : {},
    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
  });

  return response;

  //   if (!response.ok) {
  //     throw new Error("요청 실패");
  //   }

  //   const resData = await response.json();
  //   return resData;
  // } catch (err) {
  //   throw err.message;
  // }
};

export default fetchInstance;
