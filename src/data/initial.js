const initial = {
  user: {
    id: '1',
    name: 'Dorothy',
  },
  meds: {
    '1': {
      name: 'paracetamol',
      desc:
        "Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever). It's typically used to relieve mild or moderate pain, such as headaches, toothache or sprains, and reduce fevers caused by illnesses such as colds and flu. Paracetamol is often recommended as one of the first treatments for pain, as it's safe for most people to take and side effects are rare.",
      warnings:
        "Side effects from paracetamol are rare, but can include: an allergic reaction, which can cause a rash and swelling. Flushing, low blood pressure and a fast heartbeat – this can sometimes happen when paracetamol is given in hospital into a vein in your arm blood disorders, such as thrombocytopenia (low number of platelet cells) and leukopenia (low number of white blood cells). Liver and kidney damage if you take too much (overdose) – this can be fatal in severe cases. Speak to a pharmacist or doctor if you develop any troublesome side effects that you think could be caused by paracetamol. You can also report suspected side effects using the Yellow Card Scheme. Overdoses of paracetamol. Taking too much paracetamol, known as an overdose, can be very dangerous. If you've taken more than the recommended maximum dose, go to your nearest accident and emergency (A&E) department as soon as possible. It can be helpful to take any remaining medicine and the box or leaflet with you to A&E if you can. Some people feel sick, vomit or have abdominal (tummy) pain after taking too much paracetamol, but often there are no obvious symptoms at first. Go to A&E even if you're feeling well.",
      stock: 26,
      medColour: '#fff',
    },
    '2': {
      name: 'ibuprofen',
      desc:
        "Ibuprofen is a painkiller available over the counter without a prescription. It's one of a group of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs) and can be used to: ease mild to moderate pain – such as toothache, migraine and period pain. Control a high temperature (fever) – for example, when someone has the flu (influenza). Ease pain and inflammation (redness and swelling) caused by conditions that affect the joints, bones and muscles – such as rheumatoid arthritis and osteoarthritis. Ease pain and swelling caused by sprains and strains – such as sports injuries.",
      warnings:
        "Side effects of ibuprofen: Ibuprofen can cause a number of side effects. You should take the lowest possible dose for the shortest possible time needed to control your symptoms. See the patient information leaflet that comes with your medicine for a full list of side effects. Common side effects of ibuprofen include: nausea or vomiting, constipation or diarrhoea, indigestion (dyspepsia) or abdominal pain. Less common side effects include: headache or dizziness, bloating (fluid retention), raised blood pressure, inflammation of the stomach (gastritis), a stomach ulcer, allergic reactions – such as a rash, worsening of asthma symptoms by causing narrowing of the airways (bronchospasm), kidney failure, black stools and blood in your vomit – this can indicate bleeding in your stomach. If you feel unwell after taking ibuprofen or have concerns, speak to your GP or pharmacist, or call NHS 111. You can also report suspected side effects using the Yellow Card Scheme. High doses: Taking high doses of ibuprofen over long periods of time can increase your risk of: stroke – when the blood supply to the brain is disturbed, heart attacks – when the blood supply to the heart is blocked. In women, long-term use of ibuprofen might be associated with reduced fertility. This is usually reversible when you stop taking ibuprofen. Overdoses of ibuprofen. Taking too much ibuprofen, known as an overdose, can be very dangerous. If you've taken more than the recommended maximum dose, go to your nearest accident and emergency (A&E) department as soon as possible. It can be helpful to take any remaining medicine and the box or leaflet with you to A&E if you can. Some people feel sick, vomit, have abdominal pain or ringing in their ears (tinnitus) after taking too much ibuprofen, but often there are no symptoms at first. Go to A&E even if you're feeling well.",
      stock: 34,
      medColour: '#fff',
    },
  },

    "doses": {
        "1": {
            "id": "1",
            "time": "08:00",
            "dose": "2",
            "unit": "500mg tablet",
            "med_id": 1
        },
        "2": {
            "id": "2",
            "time": "12:00",
            "dose": "2",
            "unit": "500mg tablet",
            "med_id": 1
        },
        "3": {
            "id": "3",
            "time": "16:00",
            "dose": "2",
            "unit": "500mg tablet",
            "med_id": 1
        },
        "4": {
            "id": "4",
            "time": "20:00",
            "dose": "2",
            "unit": "500mg tablet",
            "med_id": 1
        },
        "5": {
            "id": "5",
            "time": "08:00",
            "dose": "2",
            "unit": "200mg tablet",
            "med_id": 2
        },
        "6": {
            "id": "6",
            "time": "16:00",
            "dose": "2",
            "unit": "200mg tablet",
            "med_id": 2
        }
       
    },

    "userMeds": [
    ]

}

export default initial;
