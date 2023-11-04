"use client";

import { Input } from "@/components/ui/input";
import React, { use } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Checkbox } from "./ui/checkbox";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleInputTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        task: task,
      },
    ]);
    setTask("");
  };

  const handleEdit = (taskId, newTask) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, task: newTask };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const handleComplete = (taskId) => {
    e.preventDefault();
    setCheckboxStates({
      ...checkboxStates,
      [taskId]: !checkboxStates[taskId],
    });
    console.log(checkboxStates);
  };

  const handleDelete = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <form className="flex flex-row">
        <Input
          className="ml-2"
          value={task}
          onChange={handleInputTask}
          type="text"
          placeholder="Write your task.."
        />
        <Button onClick={handleSubmit}>Add Task</Button>
      </form>
      <ul className="block py-2 my-2">
        {taskList.map((m) => (
          <>
            <ul className="">
              <li className="flex flex-row justify-between content-center items-center w-full my-5">
                <div className="flex flex-row items-center">
                  <Checkbox id="terms" />

                  {editingTaskId === m.id ? (
                    <Input
                      defaultValue={m.task}
                      onBlur={(e) => {
                        handleEdit(m.id, e.target.value);
                        setEditingTaskId(null);
                      }}
                    />
                  ) : (
                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm leading-5 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {m.task}
                    </label>
                  )}
                </div>
                <div className="flex flex-row ml-2">
                  <Button
                    variant="secondary"
                    className="mr-2"
                    onClick={() => setEditingTaskId(m.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(m.id)}
                  >
                    Delete
                  </Button>{" "}
                </div>
              </li>
            </ul>
          </>
        ))}
      </ul>
    </>
  );
}
