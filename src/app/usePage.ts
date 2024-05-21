// import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {ageResponse, genderResponse, countryResponse} from './types/Response';

export const usePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  //   const router = useRouter();

  const cleanUp = e => {
    e.preventDefault();
    setName('');
    setAge(0);
    setGender('');
    setCountry('');
    setIsLoading(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userName: string = inputRef?.current?.value;
      
      const APIs = [
        `https://api.agify.io?name=${userName}`,
        `https://api.genderize.io?name=${userName}`,
        `https://api.nationalize.io?name=${userName}`,
      ];

      const responses = await Promise.all(
        APIs.map(url => fetch(url).then(res => res.json())),
      );
      console.log({responses});

      const ageData: ageResponse = responses[0];
      const genderData: genderResponse = responses[1];
      const countryData: countryResponse = responses[2];

      setAge(ageData.age);
      setGender(genderData.gender);
      setCountry(countryData.country[0]?.country_id || 'Unknown');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    age,
    gender,
    country,
    inputRef,
    isLoading,
    handleSubmit,
    cleanUp,
  };
};
