import {
    sortAlphabetical,
    sortDueDate,
    sortPriority,
    sortStatus,
} from "./todo";

function testAlphabetical() {
    console.log("testAlphabetical triggered");
    const testTodos = [
        { title: "Zebra" },
        { title: "Apple" },
        { title: "Monkey" },
    ];

    sortAlphabetical(testTodos);
}

function testDueDate() {
    const testTodos = [
        { dueDate: "2026-09-22" },
        { dueDate: "2026-08-21" },
        { dueDate: "2026-07-20" },
    ];

    sortDueDate(testTodos);
}

function testPriority() {
    const testTodos = [
        { priority: "medium" },
        { priority: "low" },
        { priority: "high" },
    ];

    sortPriority(testTodos);
}

function testStatus() {
    const testTodos = [
        { status: "complete" },
        { status: "incomplete" },
        { status: "complete" },
        { status: "incomplete" },
        { status: "complete" },
        { status: "incomplete" },
    ];

    sortStatus(testTodos);
}

// testAlphabetical();
// testDueDate();
// testPriority();
testStatus();

export { testAlphabetical, testDueDate, testPriority, testStatus };
