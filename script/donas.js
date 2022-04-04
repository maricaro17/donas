const urlBase = "https://donasweetfactory.herokuapp.com/donas";
export const deleteDona = async (id) => {
  let resp = await fetch(`${urlBase}/${id}`, {
    method: "DELETE",
  });
  let data = await resp.json();
  console.log(data);
};

export const getDonas = async (param = null) => {
  const response = await fetch(
    `${urlBase}/${param ? `?category=${param}` : ""}`
  );
  const donas = await response.json();
  console.log(donas);
  return donas;
};
