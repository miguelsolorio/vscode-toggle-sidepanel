import * as vscode from 'vscode';

let sidePanelToggle: vscode.StatusBarItem;

export function activate() {
	
	sidePanelToggle = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	sidePanelToggle.command = 'workbench.action.toggleAuxiliaryBar';
	sidePanelToggle.text = '$(window)';
	sidePanelToggle.tooltip = 'Toggle Side Panel';
	sidePanelToggle.show();
}

export function deactivate() {}
