'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/data';
export function ContactForm(){
 const [name,setName]=useState('');const [email,setEmail]=useState('');const [subject,setSubject]=useState('');const [message,setMessage]=useState('');
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const body=`From: ${name}\nReply email: ${email}\n\n${message}`;window.location.href=`mailto:${site.email}?subject=${encodeURIComponent(subject||'Message from D7 website')}&body=${encodeURIComponent(body)}`;}
 return <form className="contact-form" onSubmit={submit}><label>Your name<input required type="text" maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name"/></label><label>Email address<input required type="email" maxLength={160} value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@example.com"/></label><label className="full-field">Subject<input required type="text" maxLength={160} value={subject} onChange={e=>setSubject(e.target.value)} placeholder="What would you like to discuss?"/></label><label className="full-field">Your message<textarea required minLength={10} rows={6} maxLength={3000} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us a little more..."/></label><button type="submit" className="btn btn-gold">Prepare email <ArrowUpRight size={18}/></button><p className="form-disclaimer">This demo opens your email application with a prepared message; it does not send data to a server.</p></form>
}
