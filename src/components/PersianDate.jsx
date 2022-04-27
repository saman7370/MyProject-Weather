import React, { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment-jalaali';

const weekDays = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه",
]

const yearMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
]


const PersianDate = () => {
    const[date , setDate] = useState('');
    const[time , setTime] = useState('');

    useEffect(() => {
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonths[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate)
        setTime(m.format('HH:mm'))
        
    }, []);

    return (
        <div>
              <span className="mb-3 d-block text-center">{date}</span>
              <span className="d-block text-center">ساعت <span className="Beyekan">{time}</span></span>
            
        </div>
    );
}

export default PersianDate;
