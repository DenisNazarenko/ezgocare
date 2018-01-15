export default function() {
  this.namespace = '/api';

  // this.get('/insurance', () => {
  //   return {
  //     data:[{
  //       type:'insurance',
  //       id: 1,
  //       attributes: {
  //         name: 'Choose later'
  //       }
  //     }, {
  //       type: 'insurance',
  //       id: 2,
  //       attributes: {
  //         name: 'Insurance A'
  //       }
  //     }, {
  //       type: 'insurance',
  //       id: 3,
  //       attributes: {
  //         name: 'Insurance B'
  //       }
  //     }, {
  //       type: 'insurance',
  //       id: 4,
  //       attributes: {
  //         name: 'Insurance C'
  //       }
  //     }]
  //   };
  // });
  //
  // this.get('/symptoms', () => {
  //   return {
  //     data: [{
  //       type: 'symptoms',
  //       id: 1,
  //       attributes: {
  //         name: 'Allergy'
  //       }
  //     }, {
  //       type: 'symptoms',
  //       id: 2,
  //       attributes: {
  //         name: 'Blood Clot',
  //       }
  //     }, {
  //       type: 'symptoms',
  //       id: 3,
  //       attributes: {
  //         name: 'Headache'
  //       }
  //     }, {
  //       type: 'symptoms',
  //       id: 4,
  //       attributes: {
  //         name: 'Migran'
  //       }
  //     }, {
  //       type: 'symptoms',
  //       id: 5,
  //       attributes: {
  //         name: 'Stomachache'
  //       }
  //     }]
  //   };
  // });
  //
  // this.get('/doctors', () => {
  //   return {
  //     data: [{
  //       type: 'doctors',
  //       id: 1,
  //       attributes: {
  //         "first-name": 'Marc',
  //         "last-name": 'Zachin'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-1.jpg',
  //         location: {
  //           distance: '0.7 mi',
  //           long: '-122.680522',
  //           lat: '45.519743'
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 2,
  //       attributes: {
  //         "first-name": 'Anna',
  //         "last-name": 'Smith'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-2.jpg',
  //         location: {
  //           distance: '0.9 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 3,
  //       attributes: {
  //         "first-name": 'Liza',
  //         "last-name": 'Grant'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-3.jpg',
  //         location: {
  //           distance: '1.1 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 4,
  //       attributes: {
  //         "first-name": 'Enrique',
  //         "last-name": 'Cruz'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-4.jpg',
  //         location: {
  //           distance: '1.4 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 5,
  //       attributes: {
  //         "first-name": 'Elizabeth',
  //         "last-name": 'Anderson'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-5.jpg',
  //         location: {
  //           distance: '1.7 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 6,
  //       attributes: {
  //         "first-name": 'Howard',
  //         "last-name": 'Steven'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-6.jpg',
  //         location: {
  //           distance: '2.1 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '5:00',
  //           available: false
  //         }]
  //       }
  //     }, {
  //       type: 'doctors',
  //       id: 7,
  //       attributes: {
  //         "first-name": 'Marie',
  //         "last-name": 'Chang'
  //         ,
  //         phone: '123-456-7890',
  //         address: '145 East 32nd Street, Manhattan, NY',
  //         path: '/images/doctor-7.jpg',
  //         location: {
  //           distance: '2.4 mi',
  //           long: '',
  //           lat: ''
  //         },
  //         "time-table": [{
  //           timeOfDay: 'am',
  //           time: '8:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '9:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'am',
  //           time: '11:30',
  //           available: false
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '12:30',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '2:00',
  //           available: true
  //         }, {
  //           timeOfDay: 'pm',
  //           time: '8:00',
  //           available: false
  //         }]
  //       }
  //     }],
  //   }
  // });

  this.passthrough('/api/insurance');
  this.passthrough('/api/symptoms');
  this.passthrough('/api/doctors');
}
