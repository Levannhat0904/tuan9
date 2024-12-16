import React from 'react';
import { useState } from 'react';
const LearningHook = () => {
  const [form, setForm] = useState({
    fullname: 'le nhat',
    age: 20,
    sex: 'male',
  });
  // console.log(`${form.fullname} - ${form.age} - ${form.sex}`);
  return (
    <div>
      <input
        type="text"
        value={form.fullname}
        onChange={(e) =>
          setForm({
            ...form,
            fullname: e.target.value,
          })
        }
      />
      <input
        type="number"
        value={form.age}
        onChange={(e) =>
          setForm({
            ...form,
            age: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={form.sex}
        onChange={(e) =>
          setForm({
            ...form,
            sex: e.target.value,
          })
        }
      />
    </div>
  );
};

export default LearningHook;
