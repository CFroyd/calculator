function calculateTime() {
    const systemAdminCount = parseInt(document.getElementById('systemAdmin').value) || 0;
    const projectManagerCount = parseInt(document.getElementById('projectManager').value) || 0;
    const inspectorCount = parseInt(document.getElementById('inspector').value) || 0;
  
    const totalTime =
      systemAdminCount * 7 +
      projectManagerCount * 6 +
      inspectorCount * 5;
  
    document.getElementById('result').innerText = `Estimated Total Onboarding Time: ${totalTime} hours`;
  }
  
