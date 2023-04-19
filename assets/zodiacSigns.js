import React from 'react'
import Aries from '../public/zodiac-icons/aries.svg'
import Taurus from '../public/zodiac-icons/taurus.svg'
import Gemini from '../public/zodiac-icons/gemini.svg'
import Cancer from '../public/zodiac-icons/cancer.svg'
import Leo from '../public/zodiac-icons/leo.svg'
import Virgo from '../public/zodiac-icons/virgo.svg'
import Libra from '../public/zodiac-icons/libra.svg'
import Scorpio from '../public/zodiac-icons/scorpio.svg'
import Sagittarius from '../public/zodiac-icons/sagittarius.svg'
import Capricorn from '../public/zodiac-icons/capricorn.svg'
import Aquarius from '../public/zodiac-icons/aquarius.svg'
import Pisces from '../public/zodiac-icons/pisces.svg'
import { translate } from '../src/libs/italianTranslation'



 const signs = [
{name: 'aries', icon: <Aries className=''/> },
{name: 'taurus', icon: <Taurus /> },
{name: 'gemini', icon: <Gemini /> },
{name: 'cancer', icon: <Cancer /> },
{name: 'leo', icon: <Leo /> },
{name: 'virgo', icon: <Virgo /> },
{name: 'libra', icon: <Libra /> },
{name: 'scorpio', icon: <Scorpio /> },
{name: 'sagittarius', icon: <Sagittarius /> },
{name: 'capricorn', icon: <Capricorn /> },
{name: 'aquarius', icon: <Aquarius /> },
{name: 'pisces', icon: <Pisces /> },




]


export const zodiacSigns =translate(signs.map((z) => ({ name: z.name }))).map((t,i)=>({name:t.name, icon: signs[i].icon}))

