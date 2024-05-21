interface commonProp {
  count: number;
  name: string;
}

type country = {
  country_id: string;
  probability: GLfloat;
};

export interface ageResponse extends commonProp {
  age: number;
}

export interface genderResponse extends commonProp {
  gender: string;
  probability: GLfloat;
}

export interface countryResponse extends commonProp {
  age: number;
  country: country[];
}