const todoKey="reactTodo";
export const getLocalStorage= () => {
    try {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo || rawTodo === "undefined") return [];
    return JSON.parse(rawTodo);
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    return [];
  }
};
export const setLocalStorage =(task) => {
    return  localStorage.setItem(todoKey, JSON.stringify(task));
}