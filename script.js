function showErrorMessage(message, containerId = 'errorMessage') {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = 'flex';
        container.style.animation = 'fadeIn 0.3s';
        const textElement = container.querySelector('.error-text') || container;
        textElement.textContent = message;
        
        // Adiciona classe de shake para erro
        container.classList.add('shake');
        
        // Remove shake após animação
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500);
        
        // Auto-hide com fade out
        setTimeout(() => {
            container.style.animation = 'fadeOut 0.3s';
            setTimeout(() => {
                container.style.display = 'none';
            }, 300);
        }, 5000);
    }
}

function showSuccessMessage(message, containerId = 'successMessage') {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = 'flex';
        const textElement = container.querySelector('.success-text') || container;
        textElement.textContent = message;
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            container.style.display = 'none';
        }, 3000);
    }
}

// Export functions for module usage
export { showErrorMessage, showSuccessMessage };
