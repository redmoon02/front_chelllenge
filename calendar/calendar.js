document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');
    const memoContainer = document.getElementById('memo-container');
    const memoInput = document.getElementById('memo-input');
    const saveMemoButton = document.getElementById('save-memo');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const currentMonthYearElement = document.getElementById('current-month-year');

    let selectedDate = null;
    let currentDate = new Date();
    let memos = {};

    function updateCalendar() {
        calendarContainer.innerHTML = ''; 

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        currentMonthYearElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

        const calendarHeader = document.createElement('div');
        calendarHeader.classList.add('calendar-header');

        const weekdaysContainer = document.querySelector('.weekdays');
        weekdaysContainer.innerHTML = ''; // Clear weekdays container before updating

        const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];
        for (const weekdayName of weekdayNames) {
            const weekday = document.createElement('div');
            weekday.classList.add('weekday');
            weekday.textContent = weekdayName;
            weekdaysContainer.appendChild(weekday);
        }

        const daysContainer = document.createElement('div');
        daysContainer.classList.add('days-container');

        // 박스 추가
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('empty-day');
            daysContainer.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.classList.add('calendar-day');

            dayElement.classList.add('memo-indicator');

            // 이벤트 추가
            dayElement.addEventListener('click', function () {
                selectedDate = date.toISOString().split('T')[0];
                showMemoContainer();
            });
            

            daysContainer.appendChild(dayElement);
        }

        calendarContainer.appendChild(daysContainer);

        renderMemos();
    }

    function showMemoContainer() {
        memoInput.value = memos[selectedDate] || '';
        memoContainer.style.display = 'flex';
    }

    function hideMemoContainer() {
        memoContainer.style.display = 'none';
    }

    function saveMemo() {
        memos[selectedDate] = memoInput.value;
        updateCalendar();
        hideMemoContainer();
    }

    function renderMemos() {
        const memoDots = document.querySelectorAll('.memo-dot');
        memoDots.forEach(dot => dot.remove()); // 기존 메모 표시 제거

        const memoIndicators = document.querySelectorAll('.memo-indicator');
        memoIndicators.forEach(dayElement => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(dayElement.textContent));
            const dateString = date.toISOString().split('T')[0];

            if (memos[dateString]) {
                const dot = document.createElement('div');
                dot.classList.add('memo-dot');
                dot.dataset.date = dateString;
                dot.addEventListener('click', function () {
                    selectedDate = dateString;
                    showMemoContainer();
                });
                dayElement.appendChild(dot);
            }
        });
    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        updateCalendar();
    }

    // 이벤트리스너 추가
    saveMemoButton.addEventListener('click', saveMemo);
    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    updateCalendar(); 
});
