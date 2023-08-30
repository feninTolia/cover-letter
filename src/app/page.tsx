/* eslint-disable react/no-unescaped-entities */
'use client';

import { ChangeEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const initialValues = {
  sex: '',
  type: '',
  position: '',
  company: '',
  whyThisCompany: 'web application development',
};

export default function Home() {
  const [values, setValues] = useState(initialValues);

  const handleValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex min-h-screen ">
      <div>
        <Toaster position="top-left" reverseOrder={true} />
      </div>

      <div className=" p-4 w-1/2 bg-green-200 text-black text-2xl flex flex-col gap-8">
        <div className=" flex flex-col gap-6">
          <p> Dear {values.sex || '________'}, </p>
          <p>
            I'm happy to apply for the currently open{' '}
            {values.position || '__________'} position in the{' '}
            {values.company || '__________'}.
          </p>
          <p>
            I am a Junior {values.type || '__________'} Developer. I'm dedicated
            to clean, accessible, efficient and reusable code. My skills include
            a solid foundation in HTML, CSS, JS, TS, React and Next.js. I have
            experience with Nest. I have hands-on experience in designing and
            building modern enterprise applications from the ground up. I'm
            familiar with Agile/Scrum and have led and worked in teams.
          </p>
          <p>
            I am interested in your vacancy as I want to participate in{' '}
            {values.whyThisCompany} in such a company like yours. It is
            important for me to grow as a {values.type || '__________'}{' '}
            developer and bring my skills and passion to a team.
          </p>
          <p>
            It would be a privilege to do this in the{' '}
            {values.company || '__________'}.
          </p>
          <p>
            I'm ready to complete a test task. I'm looking forward to sharing
            all my experiences in an interview.
          </p>
        </div>
        <button
          className=" bg-slate-100 p-4 rounded w-full shadow active:bg-green-500"
          onClick={(e) => {
            const previousTextSibling = e.currentTarget
              .previousSibling as HTMLDivElement;

            if (!previousTextSibling?.innerText) {
              toast.error('Smth went wrong');
              return;
            }

            navigator.clipboard.writeText(previousTextSibling.innerText);
            toast.success('Copied!');
          }}
        >
          COPY
        </button>
      </div>
      <div className=" w-1/2 bg-blue-100 p-10 text-xl text-black font-bold select-none">
        <form className=" flex flex-col gap-8 select-none">
          <fieldset className=" flex gap-8">
            <label className=" bg-purple-400  py-4 px-10 rounded inline-flex gap-4">
              Sir
              <input
                type="radio"
                name="sex"
                value="Sir"
                onChange={handleValuesChange}
              />
            </label>

            <label className=" bg-purple-400  py-4 px-10 rounded inline-flex gap-4">
              Madam
              <input
                type="radio"
                name="sex"
                value="Madam"
                onChange={handleValuesChange}
              />
            </label>
          </fieldset>

          <fieldset className=" flex gap-8">
            <label className=" bg-purple-400  py-4 px-6 rounded inline-flex gap-4">
              Front-end
              <input
                type="radio"
                name="type"
                value="Front-end"
                onChange={handleValuesChange}
              />
            </label>

            <label className=" bg-purple-400  py-4 px-6 rounded inline-flex gap-4">
              Back-end
              <input
                type="radio"
                name="type"
                value="Back-end"
                onChange={handleValuesChange}
              />
            </label>

            <label className=" bg-purple-400  py-4 px-6 rounded inline-flex gap-4">
              FullStack
              <input
                type="radio"
                name="type"
                value="Full-stack"
                onChange={handleValuesChange}
              />
            </label>
          </fieldset>

          <label className=" flex flex-col gap-2">
            Position
            <input
              name="position"
              type="text"
              value={values.position}
              onChange={handleValuesChange}
              className="py-4 px-10 rounded font-normal  select-none"
            />
          </label>

          <label className=" flex flex-col gap-2">
            Company
            <input
              name="company"
              type="text"
              value={values.company}
              onChange={handleValuesChange}
              className="py-4 px-10 rounded font-normal"
            />
          </label>

          <label className=" flex flex-col gap-2">
            Why this company
            <input
              name="whyThisCompany"
              type="text"
              value={values.whyThisCompany}
              onChange={handleValuesChange}
              className="py-4 px-10 rounded font-normal"
            />
          </label>
        </form>
      </div>
    </main>
  );
}
