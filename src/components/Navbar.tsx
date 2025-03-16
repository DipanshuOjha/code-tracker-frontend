import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Users, BarChart2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CF Tracker</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/compare" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Users className="h-5 w-5" />
              <span>Compare</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;