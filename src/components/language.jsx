import React from 'react';
import { useStores } from '../hooks/useStores';

const TranslateLanguage = ({ label }) => {
    const { languageStore } = useStores();
    const { resources } = languageStore;
    // console.log('[label], ', label);
    // console.log('[resources] ', resources);
    // console.log('[resources[label]] ', resources[label]);
    // console.log('[label.indexOf(".") === -1] ', label.indexOf('.') === -1);
    // console.log('[label.indexOf(".") === -1 ? resources.label : resources[label.split(".")[0]][label.split(".")[1]]] ', label.indexOf(".") === -1 ? resources[label] : resources[label.split(".")[0]][label.split(".")[1]]);
    
    // -1 = cannot find this char
    return label.indexOf('.') === -1 ? <span>{resources[label]}</span> : <span>{resources[label.split(".")[0]][label.split(".")[1]]}</span>;
}

export default TranslateLanguage;