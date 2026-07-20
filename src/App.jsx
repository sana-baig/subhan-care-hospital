import { useState, useMemo } from 'react'
import './App.css'

/* ------------------------------------------------------------------ */
/* Inline SVG assets                                                   */
/* ------------------------------------------------------------------ */

function MedicalLogo({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="1" y="1" width="46" height="46" rx="12" fill="#0f1729" stroke="#22d3ee" strokeOpacity="0.4" />
      <path
        d="M24 12c-1.6 2.4-2.4 4.6-2.4 6.6 0 2 .8 3.4 2.4 3.4s2.4-1.4 2.4-3.4c0-2-.8-4.2-2.4-6.6Z"
        fill="#22d3ee"
        opacity="0.85"
      />
      <path d="M24 20v18M15 29h18" stroke="#e2f6fb" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M14 22c-2.4 1.8-3.6 3.6-3.6 5.4 0 1.8 1.2 2.8 2.8 2.4 1.6-.4 2.8-2.2 3.4-4.6"
        stroke="#22d3ee"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M34 22c2.4 1.8 3.6 3.6 3.6 5.4 0 1.8-1.2 2.8-2.8 2.4-1.6-.4-2.8-2.2-3.4-4.6"
        stroke="#22d3ee"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

const UIListIcons = {
  Dashboard: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  Revenue: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M12 3v18M17 7.5c0-2-2.2-3-5-3s-5 1.2-5 3 2.2 3 5 3 5 1 5 3-2.2 3-5 3-5-1-5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Doctor: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M9 3v4a3 3 0 0 0 6 0V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 8v3a6 6 0 0 0 12 0V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="18" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 15.6v2.8M16.6 17h2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 15v.5A6 6 0 0 0 10.8 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Logs: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <rect x="4" y="3" width="16" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Lock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <rect x="5" y="10.5" width="14" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  ),
  User: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 20c1.4-3.8 4.4-5.8 7.5-5.8s6.1 2 7.5 5.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Patient: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <circle cx="9" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 20c1.1-3.6 3.1-5.4 5.5-5.4s4.4 1.8 5.5 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 5.5h4M18 3.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.2 13.2h5.3M17.85 10.55v5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Staff: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <path d="M2.8 20c1-3.4 2.9-5.1 5.2-5.1s4.2 1.7 5.2 5.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.3 14.7c2.1.2 3.6 1.7 4.4 4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
    </svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Appointment: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <rect x="4" y="5" width="16" height="15" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 14.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Prescription: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M6 3v18M6 3h5.5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 10 17 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  MedHistory: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H18a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H7.5A2.5 2.5 0 0 1 5 18.5v-14Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8h6M9 11.2h6M9 14.4h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Inventory: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.5 8v8L12 20l8.5-4V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Billing: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 11.3h8M8 14.6h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Reports: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M4.5 20V9.5M9.5 20V4.5M14.5 20v-7M19.5 20v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Settings: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v1.8M12 18.7v1.8M20.5 12h-1.8M5.3 12H3.5M17.8 6.2l-1.3 1.3M7.5 16.5l-1.3 1.3M17.8 17.8l-1.3-1.3M7.5 7.5 6.2 6.2"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
    </svg>
  ),
  Alert: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M12 3 2 20h20L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 9.5v4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.8" r="0.9" fill="currentColor" />
    </svg>
  ),
  Logout: (p) => (
    <svg viewBox="0 0 24 24" fill="none" className={p.className}>
      <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 8l4.5 4-4.5 4M18.4 12H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

/* ------------------------------------------------------------------ */
/* Mock data                                                            */
/* ------------------------------------------------------------------ */

const appointmentsData = [
  { id: 1, name: 'Ayesha Raza', header: 'Cardiology', start: 'OPD-2', datetime: '09 Jul, 09:15 AM', checkIn: 'Checked In', status: 'On Track' },
  { id: 2, name: 'Bilal Ahmed', header: 'Orthopedics', start: 'OPD-4', datetime: '09 Jul, 09:30 AM', checkIn: 'Waiting', status: 'Delayed' },
  { id: 3, name: 'Sana Tariq', header: 'General Medicine', start: 'OPD-1', datetime: '09 Jul, 09:45 AM', checkIn: 'In Consultation', status: 'On Track' },
  { id: 4, name: 'Hamza Khalid', header: 'Pediatrics', start: 'OPD-3', datetime: '09 Jul, 10:00 AM', checkIn: 'Checked In', status: 'On Track' },
  { id: 5, name: 'Mahnoor Ali', header: 'Dermatology', start: 'OPD-5', datetime: '09 Jul, 10:15 AM', checkIn: 'Waiting', status: 'On Track' },
  { id: 6, name: 'Usman Farooq', header: 'ENT', start: 'OPD-2', datetime: '09 Jul, 10:30 AM', checkIn: 'In Consultation', status: 'Delayed' },
  { id: 7, name: 'Zara Iqbal', header: 'Gynecology', start: 'OPD-6', datetime: '09 Jul, 10:45 AM', checkIn: 'Checked In', status: 'On Track' },
  { id: 8, name: 'Fahad Malik', header: 'Cardiology', start: 'OPD-2', datetime: '09 Jul, 11:00 AM', checkIn: 'Waiting', status: 'On Track' },
]

const ROLES = ['Admin', 'Doctor', 'Patient', 'Receptionist']

const patientsData = [
  { id: 1, name: 'Ayesha Raza', age: 34, gender: 'Female', ward: 'OPD-2', condition: 'Cardiology Follow-up', admitted: '05 Jul 2026', status: 'Stable' },
  { id: 2, name: 'Bilal Ahmed', age: 41, gender: 'Male', ward: 'Ward-A3', condition: 'Fracture Recovery', admitted: '02 Jul 2026', status: 'Under Observation' },
  { id: 3, name: 'Sana Tariq', age: 27, gender: 'Female', ward: 'OPD-1', condition: 'General Checkup', admitted: '09 Jul 2026', status: 'Stable' },
  { id: 4, name: 'Hamza Khalid', age: 6, gender: 'Male', ward: 'Peds-1', condition: 'Fever & Infection', admitted: '08 Jul 2026', status: 'Under Observation' },
  { id: 5, name: 'Mahnoor Ali', age: 22, gender: 'Female', ward: 'OPD-5', condition: 'Skin Allergy', admitted: '09 Jul 2026', status: 'Stable' },
  { id: 6, name: 'Usman Farooq', age: 55, gender: 'Male', ward: 'ICU-2', condition: 'Post-Surgery Care', admitted: '30 Jun 2026', status: 'Critical' },
  { id: 7, name: 'Zara Iqbal', age: 30, gender: 'Female', ward: 'Ward-B1', condition: 'Prenatal Care', admitted: '07 Jul 2026', status: 'Stable' },
]

const patientStatusStyles = {
  'Stable': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Under Observation': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Critical': 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
}

const doctorsData = [
  { id: 1, name: 'Dr. Nadia Sheikh', specialty: 'Cardiology', experience: '12 yrs', patients: 48, availability: 'On Duty' },
  { id: 2, name: 'Dr. Farhan Qureshi', specialty: 'Orthopedics', experience: '9 yrs', patients: 35, availability: 'On Duty' },
  { id: 3, name: 'Dr. Aliya Baig', specialty: 'General Medicine', experience: '6 yrs', patients: 52, availability: 'On Leave' },
  { id: 4, name: 'Dr. Kamran Yousaf', specialty: 'Pediatrics', experience: '15 yrs', patients: 41, availability: 'On Duty' },
  { id: 5, name: 'Dr. Rabia Anwar', specialty: 'Dermatology', experience: '5 yrs', patients: 29, availability: 'On Duty' },
  { id: 6, name: 'Dr. Omar Siddiqui', specialty: 'ENT', experience: '8 yrs', patients: 33, availability: 'Off Duty' },
]

const availabilityStyles = {
  'On Duty': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'On Leave': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Off Duty': 'bg-slate-500/15 text-slate-400 ring-1 ring-slate-500/30',
}

const staffData = [
  { id: 1, name: 'Khadija Meerab', role: 'Head Nurse', department: 'Ward-A', shift: 'Morning', status: 'Active' },
  { id: 2, name: 'Ahmed Raza', role: 'Lab Technician', department: 'Pathology', shift: 'Evening', status: 'Active' },
  { id: 3, name: 'Sara Naveed', role: 'Receptionist', department: 'Front Desk', shift: 'Morning', status: 'Active' },
  { id: 4, name: 'Bilal Haider', role: 'Pharmacist', department: 'Pharmacy', shift: 'Night', status: 'On Leave' },
  { id: 5, name: 'Mariam Fatima', role: 'Nurse', department: 'ICU', shift: 'Night', status: 'Active' },
  { id: 6, name: 'Junaid Malik', role: 'IT Support', department: 'Admin', shift: 'Morning', status: 'Active' },
]

const staffStatusStyles = {
  'Active': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'On Leave': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
}

const appointmentScheduleData = [
  { id: 1, patient: 'Ayesha Raza', doctor: 'Dr. Nadia Sheikh', department: 'Cardiology', date: '15 Jul 2026', time: '10:30 AM', status: 'Confirmed' },
  { id: 2, patient: 'Bilal Ahmed', doctor: 'Dr. Farhan Qureshi', department: 'Orthopedics', date: '15 Jul 2026', time: '11:15 AM', status: 'Confirmed' },
  { id: 3, patient: 'Sana Tariq', doctor: 'Dr. Aliya Baig', department: 'General Medicine', date: '15 Jul 2026', time: '01:00 PM', status: 'Pending' },
  { id: 4, patient: 'Hamza Khalid', doctor: 'Dr. Kamran Yousaf', department: 'Pediatrics', date: '16 Jul 2026', time: '09:45 AM', status: 'Confirmed' },
  { id: 5, patient: 'Mahnoor Ali', doctor: 'Dr. Rabia Anwar', department: 'Dermatology', date: '16 Jul 2026', time: '03:30 PM', status: 'Cancelled' },
  { id: 6, patient: 'Zara Iqbal', doctor: 'Dr. Nadia Sheikh', department: 'Cardiology', date: '17 Jul 2026', time: '10:00 AM', status: 'Pending' },
]

const appointmentStatusStyles = {
  'Confirmed': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Pending': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Cancelled': 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
}

const prescriptionsData = [
  { id: 1, patient: 'Ayesha Raza', doctor: 'Dr. Nadia Sheikh', medicine: 'Atorvastatin 20mg', dosage: '1 tablet nightly', issued: '10 Jul 2026', status: 'Active' },
  { id: 2, patient: 'Bilal Ahmed', doctor: 'Dr. Farhan Qureshi', medicine: 'Ibuprofen 400mg', dosage: '1 tablet, twice daily', issued: '08 Jul 2026', status: 'Active' },
  { id: 3, patient: 'Hamza Khalid', doctor: 'Dr. Kamran Yousaf', medicine: 'Amoxicillin 250mg', dosage: '1 tsp, 3x daily', issued: '09 Jul 2026', status: 'Completed' },
  { id: 4, patient: 'Mahnoor Ali', doctor: 'Dr. Rabia Anwar', medicine: 'Cetirizine 10mg', dosage: '1 tablet nightly', issued: '11 Jul 2026', status: 'Active' },
  { id: 5, patient: 'Usman Farooq', doctor: 'Dr. Farhan Qureshi', medicine: 'Tramadol 50mg', dosage: '1 tablet, as needed', issued: '30 Jun 2026', status: 'Expired' },
]

const prescriptionStatusStyles = {
  'Active': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Completed': 'bg-slate-500/15 text-slate-400 ring-1 ring-slate-500/30',
  'Expired': 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
}

const medicalHistoryData = [
  { id: 1, patient: 'Ayesha Raza', diagnosis: 'Hypertension', treatment: 'Medication + lifestyle plan', doctor: 'Dr. Nadia Sheikh', date: '05 Jul 2026', outcome: 'Ongoing' },
  { id: 2, patient: 'Bilal Ahmed', diagnosis: 'Fractured tibia', treatment: 'Cast immobilization', doctor: 'Dr. Farhan Qureshi', date: '02 Jul 2026', outcome: 'Recovering' },
  { id: 3, patient: 'Hamza Khalid', diagnosis: 'Viral fever', treatment: 'Antibiotics course', doctor: 'Dr. Kamran Yousaf', date: '08 Jul 2026', outcome: 'Recovered' },
  { id: 4, patient: 'Zara Iqbal', diagnosis: 'Routine prenatal checkup', treatment: 'Vitamins + monitoring', doctor: 'Dr. Aliya Baig', date: '07 Jul 2026', outcome: 'Ongoing' },
  { id: 5, patient: 'Usman Farooq', diagnosis: 'Post-operative recovery', treatment: 'ICU monitoring', doctor: 'Dr. Farhan Qureshi', date: '30 Jun 2026', outcome: 'Ongoing' },
]

const outcomeStyles = {
  'Ongoing': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Recovering': 'bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/30',
  'Recovered': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
}

const inventoryData = [
  { id: 1, item: 'Surgical Gloves (box)', category: 'Consumables', quantity: 240, unit: 'boxes', reorderLevel: 50, status: 'In Stock' },
  { id: 2, item: 'Paracetamol 500mg', category: 'Pharmacy', quantity: 32, unit: 'strips', reorderLevel: 40, status: 'Low Stock' },
  { id: 3, item: 'IV Cannula 18G', category: 'Consumables', quantity: 150, unit: 'units', reorderLevel: 60, status: 'In Stock' },
  { id: 4, item: 'Oxygen Cylinders', category: 'Equipment', quantity: 8, unit: 'units', reorderLevel: 10, status: 'Low Stock' },
  { id: 5, item: 'Amoxicillin 250mg', category: 'Pharmacy', quantity: 0, unit: 'strips', reorderLevel: 30, status: 'Out of Stock' },
  { id: 6, item: 'Surgical Masks (box)', category: 'Consumables', quantity: 300, unit: 'boxes', reorderLevel: 80, status: 'In Stock' },
]

const inventoryStatusStyles = {
  'In Stock': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Low Stock': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Out of Stock': 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
}

const billingData = [
  { id: 1, invoiceId: 'INV-1042', patient: 'Ayesha Raza', service: 'Cardiology Consultation', amount: 'Rs 3,500', date: '10 Jul 2026', status: 'Paid' },
  { id: 2, invoiceId: 'INV-1043', patient: 'Bilal Ahmed', service: 'Fracture Treatment + X-Ray', amount: 'Rs 12,000', date: '09 Jul 2026', status: 'Pending' },
  { id: 3, invoiceId: 'INV-1044', patient: 'Hamza Khalid', service: 'Pediatric Consultation', amount: 'Rs 2,000', date: '08 Jul 2026', status: 'Paid' },
  { id: 4, invoiceId: 'INV-1045', patient: 'Usman Farooq', service: 'ICU + Surgery Package', amount: 'Rs 85,000', date: '01 Jul 2026', status: 'Overdue' },
  { id: 5, invoiceId: 'INV-1046', patient: 'Zara Iqbal', service: 'Prenatal Checkup', amount: 'Rs 1,800', date: '07 Jul 2026', status: 'Paid' },
  { id: 6, invoiceId: 'INV-1047', patient: 'Mahnoor Ali', service: 'Dermatology Consultation', amount: 'Rs 2,500', date: '09 Jul 2026', status: 'Pending' },
]

const billingStatusStyles = {
  'Paid': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Pending': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'Overdue': 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30',
}

const checkInStyles = {
  'Checked In': 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30',
  'Waiting': 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
  'In Consultation': 'bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30',
}

/* ------------------------------------------------------------------ */
/* Login screen                                                        */
/* ------------------------------------------------------------------ */

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please supply all required authentication credentials.')
      return
    }
    setError('')
    onLogin(username.trim())
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-clinical-950 terminal-grid px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#0f1729]/90 border border-cyan-500/15 rounded-2xl card-glow p-8 backdrop-blur"
      >
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <MedicalLogo className="w-14 h-14" />
          <div>
            <h1 className="text-slate-100 font-semibold tracking-wide text-lg">Subhan Care</h1>
            <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] mt-1">Clinical Access Terminal</p>
          </div>
        </div>

        <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5">Username / Email</label>
        <div className="relative mb-4">
          <UIListIcons.User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="e.g. wali"
            className="w-full bg-clinical-900 border border-slate-700/70 rounded-lg py-2.5 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
          />
        </div>

        <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
        <div className="relative mb-2">
          <UIListIcons.Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="w-full bg-clinical-900 border border-slate-700/70 rounded-lg py-2.5 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
          />
        </div>

        {error && (
          <p className="text-rose-400 text-xs mt-2 mb-1" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg py-2.5 transition"
        >
          Sign In to Environment
        </button>

        <p className="text-center text-[11px] text-slate-600 mt-6 tracking-wide">
          Authorized Personnel System Nodes Only
        </p>
      </form>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Sidebar                                                              */
/* ------------------------------------------------------------------ */

function Sidebar({ onLogout, view, setView, mobileOpen, setMobileOpen }) {
  const navItems = [
    { key: 'dashboard', label: 'Dashboard Workspace', icon: UIListIcons.Dashboard },
    { key: 'patients', label: 'Patient Management', icon: UIListIcons.Patient },
    { key: 'doctors', label: 'Doctor Management', icon: UIListIcons.Doctor },
    { key: 'staff', label: 'Staff Management', icon: UIListIcons.Staff },
    { key: 'appointments', label: 'Appointments', icon: UIListIcons.Appointment },
    { key: 'prescriptions', label: 'Prescriptions', icon: UIListIcons.Prescription },
    { key: 'history', label: 'Medical History', icon: UIListIcons.MedHistory },
    { key: 'inventory', label: 'Inventory', icon: UIListIcons.Inventory },
    { key: 'billing', label: 'Billing', icon: UIListIcons.Billing },
    { key: 'reports', label: 'Reports', icon: UIListIcons.Reports },
    { key: 'settings', label: 'Settings', icon: UIListIcons.Settings },
  ]

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`w-64 shrink-0 bg-[#0d1526] border-r border-slate-800/80 flex flex-col fixed lg:static inset-y-0 left-0 z-40 transform transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-6 py-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <MedicalLogo className="w-9 h-9" />
            <div className="leading-tight">
              <p className="text-slate-100 font-semibold text-sm">Subhan</p>
              <p className="text-slate-100 font-semibold text-sm">Care</p>
              <p className="text-slate-100 font-semibold text-sm">Hospital</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-500 hover:text-slate-300 p-1"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto thin-scroll">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = view === item.key
            return (
              <a
                key={item.key}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setView(item.key)
                  setMobileOpen(false)
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? 'nav-active bg-cyan-500/10 text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="px-3 py-5 border-t border-slate-800/80">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 text-sm font-medium transition"
          >
            <UIListIcons.Logout className="w-4 h-4" />
            Sign Out Terminal
          </button>
        </div>
      </aside>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Top bar with role switcher                                          */
/* ------------------------------------------------------------------ */

function TopBar({ role, setRole, onMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 sm:px-8 py-4 border-b border-slate-800/80 bg-[#0d1526]/60">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-slate-400 hover:text-slate-200 p-1 shrink-0"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="flex items-center gap-1.5 bg-clinical-900 border border-slate-800 rounded-lg p-1 overflow-x-auto thin-scroll">
          {ROLES.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-medium tracking-wide transition whitespace-nowrap ${
                role === r
                  ? 'bg-cyan-500 text-clinical-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 shrink-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
        Local Workspace Node Active
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Admin dashboard                                                     */
/* ------------------------------------------------------------------ */

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-[#0f1729] border border-slate-800 rounded-xl p-5 flex items-center gap-4 card-glow">
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-xs uppercase tracking-wide">{label}</p>
        <p className="text-slate-100 text-xl font-semibold mt-0.5">{value}</p>
      </div>
    </div>
  )
}

function AdminDashboard({ username }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return appointmentsData
    return appointmentsData.filter(
      (row) => row.name.toLowerCase().includes(q) || row.checkIn.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Welcome back, {username || 'Wali'}</h2>
          <p className="text-slate-500 text-sm mt-0.5">Active Interface: Admin Console</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <select className="bg-clinical-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-300 outline-none focus:border-cyan-500/60">
            <option>Active Interface: Admin</option>
            <option>Active Interface: Front Desk</option>
          </select>
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Filter records..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Revenue className="w-5 h-5" />} label="Total Revenue" value="$30,000" />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Active Doctors" value="18" />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="System Logs" value="25" />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Master Clinical Schedule</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Header</th>
                <th className="px-5 py-3 font-medium">Start</th>
                <th className="px-5 py-3 font-medium">Date &amp; Time</th>
                <th className="px-5 py-3 font-medium">Check-In Status</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.name}</td>
                  <td className="px-5 py-3 text-slate-400">{row.header}</td>
                  <td className="px-5 py-3 text-slate-400">{row.start}</td>
                  <td className="px-5 py-3 text-slate-400">{row.datetime}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${checkInStyles[row.checkIn]}`}>
                      {row.checkIn}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-400">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching records found. Try a different name or status.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Patient Management                                                   */
/* ------------------------------------------------------------------ */

function PatientManagement() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return patientsData
    return patientsData.filter(
      (row) => row.name.toLowerCase().includes(q) || row.condition.toLowerCase().includes(q) || row.ward.toLowerCase().includes(q)
    )
  }, [query])

  const critical = patientsData.filter((p) => p.status === 'Critical').length
  const observation = patientsData.filter((p) => p.status === 'Under Observation').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Patient Management</h2>
          <p className="text-slate-500 text-sm mt-0.5">Admissions, wards, and clinical status</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search patients..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Patient className="w-5 h-5" />} label="Total Patients" value={patientsData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Under Observation" value={observation} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Critical Cases" value={critical} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Patient Records</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Age</th>
                <th className="px-5 py-3 font-medium">Gender</th>
                <th className="px-5 py-3 font-medium">Ward</th>
                <th className="px-5 py-3 font-medium">Condition</th>
                <th className="px-5 py-3 font-medium">Admitted</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.name}</td>
                  <td className="px-5 py-3 text-slate-400">{row.age}</td>
                  <td className="px-5 py-3 text-slate-400">{row.gender}</td>
                  <td className="px-5 py-3 text-slate-400">{row.ward}</td>
                  <td className="px-5 py-3 text-slate-400">{row.condition}</td>
                  <td className="px-5 py-3 text-slate-400">{row.admitted}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${patientStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching patients found. Try a different name or ward.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Doctor Management                                                     */
/* ------------------------------------------------------------------ */

function DoctorManagement() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return doctorsData
    return doctorsData.filter(
      (row) => row.name.toLowerCase().includes(q) || row.specialty.toLowerCase().includes(q)
    )
  }, [query])

  const onDuty = doctorsData.filter((d) => d.availability === 'On Duty').length
  const specialties = new Set(doctorsData.map((d) => d.specialty)).size

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Doctor Management</h2>
          <p className="text-slate-500 text-sm mt-0.5">Roster, specialties, and duty status</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search doctors..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Add Doctor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Total Doctors" value={doctorsData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="On Duty Now" value={onDuty} />
        <StatCard icon={<UIListIcons.Revenue className="w-5 h-5" />} label="Specialties Covered" value={specialties} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Doctor Roster</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Specialty</th>
                <th className="px-5 py-3 font-medium">Experience</th>
                <th className="px-5 py-3 font-medium">Active Patients</th>
                <th className="px-5 py-3 font-medium">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.name}</td>
                  <td className="px-5 py-3 text-slate-400">{row.specialty}</td>
                  <td className="px-5 py-3 text-slate-400">{row.experience}</td>
                  <td className="px-5 py-3 text-slate-400">{row.patients}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${availabilityStyles[row.availability]}`}>
                      {row.availability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching doctors found. Try a different name or specialty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Staff Management                                                      */
/* ------------------------------------------------------------------ */

function StaffManagement() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return staffData
    return staffData.filter(
      (row) => row.name.toLowerCase().includes(q) || row.role.toLowerCase().includes(q) || row.department.toLowerCase().includes(q)
    )
  }, [query])

  const active = staffData.filter((s) => s.status === 'Active').length
  const departments = new Set(staffData.map((s) => s.department)).size

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Staff Management</h2>
          <p className="text-slate-500 text-sm mt-0.5">Support staff, shifts, and departments</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search staff..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Add Staff
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Staff className="w-5 h-5" />} label="Total Staff" value={staffData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Active Today" value={active} />
        <StatCard icon={<UIListIcons.Revenue className="w-5 h-5" />} label="Departments" value={departments} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Staff Directory</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Department</th>
                <th className="px-5 py-3 font-medium">Shift</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.name}</td>
                  <td className="px-5 py-3 text-slate-400">{row.role}</td>
                  <td className="px-5 py-3 text-slate-400">{row.department}</td>
                  <td className="px-5 py-3 text-slate-400">{row.shift}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${staffStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching staff found. Try a different name or department.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Appointments                                                          */
/* ------------------------------------------------------------------ */

function Appointments() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return appointmentScheduleData
    return appointmentScheduleData.filter(
      (row) => row.patient.toLowerCase().includes(q) || row.doctor.toLowerCase().includes(q) || row.department.toLowerCase().includes(q)
    )
  }, [query])

  const confirmed = appointmentScheduleData.filter((a) => a.status === 'Confirmed').length
  const pending = appointmentScheduleData.filter((a) => a.status === 'Pending').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Appointments</h2>
          <p className="text-slate-500 text-sm mt-0.5">Scheduled consultations across all departments</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search appointments..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Appointment className="w-5 h-5" />} label="Total Appointments" value={appointmentScheduleData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Confirmed" value={confirmed} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Pending" value={pending} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Appointment Schedule</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Doctor</th>
                <th className="px-5 py-3 font-medium">Department</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Time</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.patient}</td>
                  <td className="px-5 py-3 text-slate-400">{row.doctor}</td>
                  <td className="px-5 py-3 text-slate-400">{row.department}</td>
                  <td className="px-5 py-3 text-slate-400">{row.date}</td>
                  <td className="px-5 py-3 text-slate-400">{row.time}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${appointmentStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching appointments found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Prescriptions                                                        */
/* ------------------------------------------------------------------ */

function Prescriptions() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return prescriptionsData
    return prescriptionsData.filter(
      (row) => row.patient.toLowerCase().includes(q) || row.medicine.toLowerCase().includes(q) || row.doctor.toLowerCase().includes(q)
    )
  }, [query])

  const active = prescriptionsData.filter((p) => p.status === 'Active').length
  const expired = prescriptionsData.filter((p) => p.status === 'Expired').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Prescriptions</h2>
          <p className="text-slate-500 text-sm mt-0.5">Medicines prescribed to patients</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search prescriptions..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            New Prescription
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Prescription className="w-5 h-5" />} label="Total Prescriptions" value={prescriptionsData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Active" value={active} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Expired" value={expired} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Prescription Records</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Doctor</th>
                <th className="px-5 py-3 font-medium">Medicine</th>
                <th className="px-5 py-3 font-medium">Dosage</th>
                <th className="px-5 py-3 font-medium">Issued</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.patient}</td>
                  <td className="px-5 py-3 text-slate-400">{row.doctor}</td>
                  <td className="px-5 py-3 text-slate-400">{row.medicine}</td>
                  <td className="px-5 py-3 text-slate-400">{row.dosage}</td>
                  <td className="px-5 py-3 text-slate-400">{row.issued}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${prescriptionStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching prescriptions found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Medical History                                                       */
/* ------------------------------------------------------------------ */

function MedicalHistory() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return medicalHistoryData
    return medicalHistoryData.filter(
      (row) => row.patient.toLowerCase().includes(q) || row.diagnosis.toLowerCase().includes(q) || row.doctor.toLowerCase().includes(q)
    )
  }, [query])

  const ongoing = medicalHistoryData.filter((h) => h.outcome === 'Ongoing').length
  const recovered = medicalHistoryData.filter((h) => h.outcome === 'Recovered').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Medical History</h2>
          <p className="text-slate-500 text-sm mt-0.5">Diagnosis and treatment records per patient</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search records..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Add Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.MedHistory className="w-5 h-5" />} label="Total Records" value={medicalHistoryData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Ongoing Cases" value={ongoing} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Fully Recovered" value={recovered} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Patient Case History</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Diagnosis</th>
                <th className="px-5 py-3 font-medium">Treatment</th>
                <th className="px-5 py-3 font-medium">Doctor</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.patient}</td>
                  <td className="px-5 py-3 text-slate-400">{row.diagnosis}</td>
                  <td className="px-5 py-3 text-slate-400">{row.treatment}</td>
                  <td className="px-5 py-3 text-slate-400">{row.doctor}</td>
                  <td className="px-5 py-3 text-slate-400">{row.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${outcomeStyles[row.outcome]}`}>
                      {row.outcome}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching records found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Inventory                                                             */
/* ------------------------------------------------------------------ */

function Inventory() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return inventoryData
    return inventoryData.filter(
      (row) => row.item.toLowerCase().includes(q) || row.category.toLowerCase().includes(q)
    )
  }, [query])

  const lowStock = inventoryData.filter((i) => i.status === 'Low Stock').length
  const outOfStock = inventoryData.filter((i) => i.status === 'Out of Stock').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Inventory</h2>
          <p className="text-slate-500 text-sm mt-0.5">Medical supplies, pharmacy stock, and equipment</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search inventory..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Inventory className="w-5 h-5" />} label="Total Items" value={inventoryData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Low Stock" value={lowStock} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Out of Stock" value={outOfStock} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Stock Register</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Item</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Quantity</th>
                <th className="px-5 py-3 font-medium">Reorder Level</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.item}</td>
                  <td className="px-5 py-3 text-slate-400">{row.category}</td>
                  <td className="px-5 py-3 text-slate-400">{row.quantity} {row.unit}</td>
                  <td className="px-5 py-3 text-slate-400">{row.reorderLevel} {row.unit}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${inventoryStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching items found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Billing                                                               */
/* ------------------------------------------------------------------ */

function Billing() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return billingData
    return billingData.filter(
      (row) => row.patient.toLowerCase().includes(q) || row.invoiceId.toLowerCase().includes(q) || row.service.toLowerCase().includes(q)
    )
  }, [query])

  const paid = billingData.filter((b) => b.status === 'Paid').length
  const overdue = billingData.filter((b) => b.status === 'Overdue').length

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Billing</h2>
          <p className="text-slate-500 text-sm mt-0.5">Patient invoices and payment status</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <UIListIcons.Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search invoices..."
              className="bg-clinical-900 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-56 transition"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition">
            <UIListIcons.Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        <StatCard icon={<UIListIcons.Billing className="w-5 h-5" />} label="Total Invoices" value={billingData.length} />
        <StatCard icon={<UIListIcons.Logs className="w-5 h-5" />} label="Paid" value={paid} />
        <StatCard icon={<UIListIcons.Doctor className="w-5 h-5" />} label="Overdue" value={overdue} />
      </div>

      <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
        <div className="px-5 py-4 border-b border-slate-800">
          <h3 className="text-slate-100 text-sm font-semibold">Invoice Register</h3>
        </div>

        <div className="overflow-x-auto thin-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-800">
                <th className="px-5 py-3 font-medium">Invoice ID</th>
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-800/20 transition">
                  <td className="px-5 py-3 text-slate-200 font-medium">{row.invoiceId}</td>
                  <td className="px-5 py-3 text-slate-400">{row.patient}</td>
                  <td className="px-5 py-3 text-slate-400">{row.service}</td>
                  <td className="px-5 py-3 text-slate-400">{row.amount}</td>
                  <td className="px-5 py-3 text-slate-400">{row.date}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${billingStatusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No matching invoices found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Reports                                                               */
/* ------------------------------------------------------------------ */

function Reports() {
  const [range, setRange] = useState('This Month')

  const summary = [
    { label: 'Total Patients Seen', value: '312', icon: UIListIcons.Patient },
    { label: 'Appointments Completed', value: '198', icon: UIListIcons.Appointment },
    { label: 'Revenue Collected', value: 'Rs 1,240,000', icon: UIListIcons.Billing },
    { label: 'Prescriptions Issued', value: '156', icon: UIListIcons.Prescription },
  ]

  const departmentLoad = [
    { department: 'Cardiology', patients: 68, share: 78 },
    { department: 'Orthopedics', patients: 52, share: 60 },
    { department: 'General Medicine', patients: 74, share: 85 },
    { department: 'Pediatrics', patients: 45, share: 52 },
    { department: 'Dermatology', patients: 30, share: 35 },
    { department: 'ENT', patients: 22, share: 26 },
  ]

  const recentReports = [
    { id: 1, name: 'Monthly Patient Intake Summary', generated: '10 Jul 2026', type: 'Patients' },
    { id: 2, name: 'Revenue & Billing Report', generated: '09 Jul 2026', type: 'Finance' },
    { id: 3, name: 'Doctor Utilization Report', generated: '08 Jul 2026', type: 'Staffing' },
    { id: 4, name: 'Inventory Stock Report', generated: '07 Jul 2026', type: 'Inventory' },
    { id: 5, name: 'Appointment No-Show Report', generated: '05 Jul 2026', type: 'Appointments' },
  ]

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
        <div>
          <h2 className="text-slate-100 text-xl font-semibold">Reports</h2>
          <p className="text-slate-500 text-sm mt-0.5">Operational and financial summaries across the hospital</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="bg-clinical-900 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-4 py-2 transition whitespace-nowrap">
            <UIListIcons.Plus className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
        {summary.map((s) => (
          <StatCard key={s.label} icon={<s.icon className="w-5 h-5" />} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
        <div className="xl:col-span-3 bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
          <div className="px-5 py-4 border-b border-slate-800">
            <h3 className="text-slate-100 text-sm font-semibold">Department Patient Load — {range}</h3>
          </div>
          <div className="p-5 space-y-4">
            {departmentLoad.map((d) => (
              <div key={d.department}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-slate-300">{d.department}</span>
                  <span className="text-slate-500">{d.patients} patients</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                    style={{ width: `${d.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
          <div className="px-5 py-4 border-b border-slate-800">
            <h3 className="text-slate-100 text-sm font-semibold">Recently Generated</h3>
          </div>
          <div className="divide-y divide-slate-800/70">
            {recentReports.map((r) => (
              <div key={r.id} className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-800/20 transition">
                <div className="min-w-0">
                  <p className="text-slate-200 text-sm font-medium truncate">{r.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{r.type} · {r.generated}</p>
                </div>
                <button className="shrink-0 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Settings                                                              */
/* ------------------------------------------------------------------ */

function Settings({ username }) {
  const [notifications, setNotifications] = useState({
    appointments: true,
    lowStock: true,
    billing: false,
    system: true,
  })
  const [twoFactor, setTwoFactor] = useState(false)
  const [saved, setSaved] = useState(false)

  function toggle(key) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const notificationItems = [
    { key: 'appointments', label: 'Appointment reminders', desc: 'Get notified about upcoming and cancelled appointments.' },
    { key: 'lowStock', label: 'Low stock alerts', desc: 'Get notified when inventory items fall below reorder level.' },
    { key: 'billing', label: 'Billing updates', desc: 'Get notified when invoices are paid or overdue.' },
    { key: 'system', label: 'System notices', desc: 'Get notified about maintenance and system-wide updates.' },
  ]

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-7">
      <div className="mb-7">
        <h2 className="text-slate-100 text-xl font-semibold">Settings</h2>
        <p className="text-slate-500 text-sm mt-0.5">Manage your account, security, and notification preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
            <div className="px-5 py-4 border-b border-slate-800">
              <h3 className="text-slate-100 text-sm font-semibold">Profile</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name</label>
                  <input
                    defaultValue={username || 'Admin User'}
                    type="text"
                    className="w-full bg-clinical-900 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-100 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Role</label>
                  <input
                    defaultValue="Administrator"
                    disabled
                    type="text"
                    className="w-full bg-clinical-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-500 outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                  <input
                    defaultValue="admin@subhancare.com"
                    type="email"
                    className="w-full bg-clinical-900 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-100 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Phone</label>
                  <input
                    defaultValue="+92 300 1234567"
                    type="text"
                    className="w-full bg-clinical-900 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-100 outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
            <div className="px-5 py-4 border-b border-slate-800">
              <h3 className="text-slate-100 text-sm font-semibold">Notifications</h3>
            </div>
            <div className="divide-y divide-slate-800/70">
              {notificationItems.map((item) => (
                <div key={item.key} className="px-5 py-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-slate-200 text-sm font-medium">{item.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => toggle(item.key)}
                    className={`shrink-0 relative w-11 h-6 rounded-full transition ${
                      notifications[item.key] ? 'bg-cyan-500' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                        notifications[item.key] ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-[#0f1729] border border-slate-800 rounded-xl overflow-hidden card-glow">
            <div className="px-5 py-4 border-b border-slate-800">
              <h3 className="text-slate-100 text-sm font-semibold">Security</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-slate-200 text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-slate-500 text-xs mt-0.5">Add an extra layer of security.</p>
                </div>
                <button
                  onClick={() => setTwoFactor((v) => !v)}
                  className={`shrink-0 relative w-11 h-6 rounded-full transition ${twoFactor ? 'bg-cyan-500' : 'bg-slate-700'}`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                      twoFactor ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              <button className="w-full text-left text-sm text-cyan-400 hover:text-cyan-300 font-medium transition">
                Change Password →
              </button>
            </div>
          </div>

          <div className="bg-[#0f1729] border border-slate-800 rounded-xl p-5 card-glow">
            <h3 className="text-slate-100 text-sm font-semibold mb-1">System Info</h3>
            <div className="space-y-2 mt-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Version</span>
                <span className="text-slate-300">2.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Environment</span>
                <span className="text-slate-300">Production</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Last Updated</span>
                <span className="text-slate-300">15 Jul 2026</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg py-2.5 transition"
          >
            {saved ? 'Saved ✓' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Error page (404 / not found)                                        */
/* ------------------------------------------------------------------ */

function ErrorPage({ onBack }) {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-7">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-5">
          <UIListIcons.Alert className="w-8 h-8" />
        </div>
        <p className="text-6xl font-bold text-slate-700 mb-2">404</p>
        <h3 className="text-slate-100 font-semibold text-lg">Page Not Found</h3>
        <p className="text-slate-500 text-sm mt-2">
          The screen you're looking for doesn't exist or may have been moved.
        </p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-clinical-950 font-medium text-sm rounded-lg px-5 py-2.5 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Placeholder role panel (Doctor / Patient / Receptionist)            */
/* ------------------------------------------------------------------ */

function RolePlaceholder({ role }) {
  return (
    <div className="flex-1 flex items-center justify-center px-8 py-7">
      <div className="bg-[#0f1729] border border-slate-800 rounded-xl p-10 max-w-md text-center card-glow">
        <div className="w-12 h-12 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
          <UIListIcons.Dashboard className="w-5 h-5" />
        </div>
        <h3 className="text-slate-100 font-semibold text-base">{role} Operations Module</h3>
        <p className="text-slate-500 text-sm mt-2">
          Telemetry node active. Input pipeline matches live filters.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('Admin')
  const [view, setView] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleLogin(name) {
    setUsername(name)
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setUsername('')
    setRole('Admin')
    setView('dashboard')
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  const knownViews = ['dashboard', 'patients', 'doctors', 'staff', 'appointments', 'prescriptions', 'history', 'inventory', 'billing', 'reports', 'settings']

  function renderMain() {
    if (role !== 'Admin') {
      return <RolePlaceholder role={role} />
    }
    if (view === 'patients') return <PatientManagement />
    if (view === 'doctors') return <DoctorManagement />
    if (view === 'staff') return <StaffManagement />
    if (view === 'appointments') return <Appointments />
    if (view === 'prescriptions') return <Prescriptions />
    if (view === 'history') return <MedicalHistory />
    if (view === 'inventory') return <Inventory />
    if (view === 'billing') return <Billing />
    if (view === 'reports') return <Reports />
    if (view === 'settings') return <Settings username={username} />
    if (view === 'dashboard') return <AdminDashboard username={username} />
    if (!knownViews.includes(view)) return <ErrorPage onBack={() => setView('dashboard')} />
    return <AdminDashboard username={username} />
  }

  return (
    <div className="min-h-screen flex bg-clinical-950">
      <Sidebar onLogout={handleLogout} view={view} setView={setView} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar role={role} setRole={setRole} onMenuClick={() => setMobileOpen(true)} />
        {renderMain()}
      </div>
    </div>
  )
}
