const AUTHORIZARION_TOKEN = 'authtoken';

export const headers = { 
  'Content-Type': 'application/json',
  'Authorization': AUTHORIZARION_TOKEN
};

export const configGET = () => {
  return {
    method: 'GET',
    headers: headers
  };
};

export const configPOST = body => {
  return {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  };
};

export const configPUT = body => {
  return {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body)
  };
};

export const configDELETE = () => {
  return {
    method: 'DELETE',
    headers: headers
  };
};
