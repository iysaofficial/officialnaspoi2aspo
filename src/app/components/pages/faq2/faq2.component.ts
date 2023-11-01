import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq2',
  templateUrl: './faq2.component.html',
  styleUrls: ['./faq2.component.css']
})
export class Faq2Component implements OnInit {
 
  faqs = {
    "SetelahMendaftar":[
    {
      "id": 1,
      "title": "1. Minsa, when will we get our LoA and Invoice? Where was it sent?",
      "text": "The committee will send LoA and Invoice no later than 14 working days after you register. We will send the LoA and Invoice to the team leaders email, so make sure you include a valid and correct email address!"
    },
    {
      "id": 2,
      "title": "2.  Minsa, I registered a week ago but how come I haven't received the LoA and Invoice yet?",
      "text": "Try checking the spam folder in your team leaders email, maybe the email from the IYSA team will go to the spam folder"
    },
    {
      "id": 3,
      "title": "3. Where to upload the competition file, Minsa?",
      "text": "Upload the files requested by the committee to the Google Drive link that we have included in your LoA, make sure you read the LoA carefully, OK!",
      "bagian2": ""
    },
    {
      "id": 4,
      "title": "4. I want to pay the registration fee but how come I can't find the invoice? and where is the payment transferred?",
      "text": "Come on, have you read LoA to the end yet? Because we will send the invoice with your teams LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!",
      "bagian2": ""
    },
    {
      "id": 5,
      "title": "5. Minsa, I've already paid the registration fee. Where can I upload the proof of payment?",
      "text": "If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too",
      "bagian2": ""
    },
    {
      "id": 6,
      "title": "6. When will the receipt be sent to us?",
      "text": "We will send a receipt for payment in a maximum of 7 working days to the team leaders email, after you have uploaded proof of payment!",
      "bagian2": ""
    },
    {
      "id": 7,
      "title": "7. Minsa, one more week for judging, how come I haven't received my team's presentation schedule yet?",
      "text": "We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leaders email. Make sure you diligently check the information we provide on the Whatsapp group and also email!",
      "bagian2": ""
    }
  ],
    "SelamaEventBerlangsung": [
      {
        "id": 1,
        "title": "1. When will the presentation schedule be given by the committee?",
        "text": "We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders e-mail."
      },
      {
        "id": 2,
        "title": "2. What apps do online presentations use? Zoom, google meet or something else?",
        "text": "For online judging, we always use the Zoom application and make sure your Zoom application is up to date."
      },
      {
        "id": 3,
        "title": "3. When will the zoom link be given by the committee?",
        "text": "We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your teams presentation time"
      },
      {
        "id": 4,
        "title": " 4. How many zoom accounts can join and what kind of security?",
        "text": "You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely 'Room Number_Team Leader Name_Institution Name'."
      },
      {
        "id": 5,
        "title": "5. How long do participants present?",
        "text": "You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury"
      },
      {
        "id": 6,
        "title": "6. How many judges will come to the offline participant booth, Minsa?",
        "text": "Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers"
      },
      {
        "id": 7,
        "title": " 7. Can we immediately tidy up our booth after being judged?",
        "text": "You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first"
      }
    ],
    "SetelahAcara": [
      {
        "id": 1,
        "title": "1. When will the winners be announced?",
        "text": "Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book."
      },
      {
        "id": 2,
        "title": "2. Where can we see the winning results?",
        "text": "You can check the final results on the official website of the event you are participating in."
      },
      {
        "id": 3,
        "title": "3. When will the E-certificate be sent?",
        "text": "IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition."
      },
      {
        "id": 4,
        "title": "4.  When is the online delivery of participant certificates?",
        "text": "The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not."
      },
      {
        "id": 5,
        "title": "5. Where can we get a supervisor certificate?",
        "text": "You can see and download the supervisor certificate on the official website of the event you are participating in."
      },
      {
        "id": 6,
        "title": "6. How to do medal doubling?",
        "text": "For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group, we will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner."
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    // Implementasi lain yang mungkin Anda miliki di sini
  }
}
