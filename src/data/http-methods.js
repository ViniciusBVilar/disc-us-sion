
const headers = [{ 'Authorization': 'letitbe' }];

export const configGET = {
  method: 'GET',
  headers: [...headers],
};

export const configPOST = (body) => {
  return {
    method: 'POST',
    headers: [...headers],
    body: JSON.stringify({ body })
  }
};

export const configPUT = (body) => {
  return {
    method: 'PUT',
    headers: [...headers],
    body: JSON.stringify({ body })
  };
};

export const configDELETE = {
  method: 'DELETE',
  headers: [...headers],
};