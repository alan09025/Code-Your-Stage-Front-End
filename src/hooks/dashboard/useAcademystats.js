import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");

  const newData = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const subject in data) {
    // merge
    if (subject.includes('管理')|| subject.includes('會計') || subject.includes('國際企業')) {
      newData['管理學院'] = (newData['管理學院'] || 0) + data[subject];
    }
    else if (subject.includes('創新')) {
      newData['創新學院'] = (newData['創新學院'] || 0) + data[subject];
    }
    else if (subject.includes('經濟')) {
      newData['社會科學院'] = (newData['社會科學院'] || 0) + data[subject];
    }
    else if (subject.includes('資訊工程') || subject.includes('電機') || subject.includes('電資')) {
      newData['電資學院'] = (newData['電資學院'] || 0) + data[subject];
    }
    else if (subject.includes('心理') || subject.includes('物理學') || subject.includes('數學')) {
      newData['理學院'] = (newData['理學院'] || 0) + data[subject];
    }
    else if (subject.includes('工程')) {
      newData['工學院'] = (newData['工學院'] || 0) + data[subject];
    }   
    else if (subject.includes('語文') || subject.includes('戲劇') || subject.includes('歷史')) {
      newData['文學院'] = (newData['文學院'] || 0) + data[subject];
    }
     else if (subject.includes('法律')) {
      newData['法律學院'] = (newData['法律學院'] || 0) + data[subject];
    }
    else if (subject.includes('物理治療')) {
      newData['醫學院'] = (newData['醫學院'] || 0) + data[subject];
    }
    else {
      newData[subject] = data[subject];
    }
  }
  
  return {
    labels: data && Object.keys(newData),
    values: data && Object.values(newData)
  };
};

export default useAcademystats;
