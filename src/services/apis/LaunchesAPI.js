export const getLaunchesListAPi = async () => {
  try {
    let response = await fetch(
      "https://api.spacexdata.com/v5/launches"
    );
    response = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
