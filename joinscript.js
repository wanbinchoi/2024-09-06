const registeredIDs = [];

function validateForm() {
    const userNameInput = document.getElementById('username');
    const userIDInput = document.getElementById('userid');
    const userPWInput = document.getElementById('userpw');
    const userPWConfirmInput = document.getElementById('userpw-confirm');
    const message = document.getElementById('message');

    // 공백 체크
    if (!userIDInput.value.trim() || !userPWInput.value.trim() || !userNameInput.value.trim() || !userPWConfirmInput.value.trim()) {
        message.textContent = "모든 항목을 작성해주세요.";
        message.style.color = 'green';
        return false;
    }

    // 비밀번호 일치 확인
    if (!validatePassword(userPWInput.value.trim(), userPWConfirmInput.value.trim())) {
        return false;
    }

    // 아이디 중복 확인
    if (registeredIDs.includes(userIDInput.value.trim())) {
        message.textContent = "이미 등록된 아이디입니다.";
        message.style.color = 'red';
        return false;
    }

    return true;
}

function validatePassword(password, confirmPassword) {
    const message = document.getElementById('message');

    if (password.length < 8) {
        message.style.color = 'red';
        message.textContent = '비밀번호는 최소 8자리 이상이어야 합니다.';
        return false;
    }

    if (password !== confirmPassword) {
        message.textContent = "비밀번호가 일치하지 않습니다.";
        message.style.color = 'red';
        return false;
    }

    return true;
}

function registerUser() {
    if (!validateForm()) {
        return;
    }
    const userIDInput = document.getElementById('userid');

    registeredIDs.push(userIDInput.value.trim());

    const message = document.getElementById('message');
    message.textContent = "회원가입 완료!";
    message.style.color = 'blue';

    clearForm();
}

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('userid').value = '';
    document.getElementById('userpw').value = '';
    document.getElementById('userpw-confirm').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('register');
    registerButton.addEventListener('click', registerUser);
});
